import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import {
  AutoCompleteContainer,
  Autocomplete,
  OptionText,
  StyledAddButton,
} from './styles';

export default function AutoCompleteMultiple({
  options,
  selectedOptions,
  setSelectedOptions,
  onFocus,
}) {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      setFilteredOptions([]);
    }

    const regex = new RegExp(`${query.trim().toUpperCase()}`, 'i');

    setFilteredOptions(options.filter((item) => item.name.search(regex) >= 0));
  }, [options, query]);

  const handleSelect = useCallback(
    (item) => {
      setQuery('');

      const optionExists = selectedOptions.filter(
        (option) => option.name === item.name
      );

      if (optionExists.length > 0) return;

      setSelectedOptions([...selectedOptions, { specification: item }]);
    },
    [selectedOptions, setSelectedOptions]
  );

  const handleAdd = useCallback(
    (newTag) => {
      if (newTag === '') return;

      const optionExists = selectedOptions.filter(
        (option) => option.name === newTag
      );

      if (optionExists.length > 0) return;

      setSelectedOptions([
        ...selectedOptions,
        { specification: { name: newTag } },
      ]);
      setQuery('');
    },
    [selectedOptions, setSelectedOptions]
  );

  return (
    <View style={{ position: 'relative' }}>
      <AutoCompleteContainer>
        <Autocomplete
          autoCapitalize="characters"
          autoCorrect={false}
          data={(query !== '' && filteredOptions) || []}
          defaultValue={query}
          onFocus={onFocus}
          onChangeText={setQuery}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item)}>
              <OptionText>{item.name}</OptionText>
            </TouchableOpacity>
          )}
        />
        <StyledAddButton onPress={() => handleAdd(query.toUpperCase())} />
      </AutoCompleteContainer>
    </View>
  );
}

AutoCompleteMultiple.propTypes = {
  selectedOptions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setSelectedOptions: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onFocus: PropTypes.func,
};

AutoCompleteMultiple.defaultProps = {
  onFocus: () => {},
};
