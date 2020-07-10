import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Text } from 'react-native';
import { useField } from '@unform/core';

import PropTypes from 'prop-types';

import RNPickerSelect from 'react-native-picker-select';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import strings from '../../assets/strings';

import { Wrapper, InputTitle, Container } from './styles';

function SelectInput({ title, name, style, items, disabled, ...rest }) {
  const inputElementRef = useRef(null);

  const { registerField, defaultValue = null, fieldName, error } = useField(
    name
  );

  /**
   * SEM SETAR UM ESTADO O COMPONENTE NÃO FUNCIONA!
   * O ESTADO SEGUINTE FOI CRIADO APENAS PARA GARANTIR O FUNCIONAMENTO,
   * NÃO ESTÁ SENDO UTILIZADO EM NENHUM LUGAR DA APLICAÇÃO.
   */
  // eslint-disable-next-line
  const [state, setState] = useState(defaultValue || null);

  const inputValueRef = useRef({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = null;
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  const handleValueChange = useCallback((value) => {
    inputValueRef.current.value = value;
    /**
     *  SEM SETAR O ESTADO NA SEGUINTE FUNÇÃO O SELECT NÃO FUNCIONA CORRETAMENTE
     *  PARECE QUE A ONVALUECHANGE É EXECUTADA DUAS VEZES,
     *  PRIMEIRO COM O NOVO VALOR E EM SEGUIDA COM O VALOR ANTIGO, RETORNANDO PARA O VALOR ANTERIOR
     *  SE COMENTAR ESSA FUNÇÃO PODERÁ VER NO REACTOTRON QUE SERÃO EXIBIDOS 2 LOGS,
     *  PRIMEIRO COM O NOVO VALOR E DEPOIS COM O VALOR ANTERIOR DO SELECT
     */
    // setState(value);
    console.tron.log('Mudou valor', value);
  }, []);

  return (
    <Wrapper style={style}>
      <InputTitle {...rest}>{title}</InputTitle>
      <Container {...rest}>
        <RNPickerSelect
          ref={inputElementRef}
          disabled={disabled}
          placeholder={{ label: `${strings.select_shop}`, value: null }}
          items={items}
          value={inputValueRef.current.value}
          onValueChange={handleValueChange}
          useNativeAndroidPickerStyle={false}
          style={{
            inputAndroid: {
              fontSize: 16,
              color: `${colors.black80}`,
            },
            iconContainer: {
              top: 5,
            },
          }}
          Icon={() => {
            return <Icon name="arrow-drop-down" size={35} color="gray" />;
          }}
        />
        <Text style={{ color: '#C53030', textAlign: 'right', marginTop: 5 }}>
          {error}
        </Text>
      </Container>
    </Wrapper>
  );
}

export default SelectInput;

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  disabled: PropTypes.bool,
};

SelectInput.defaultProps = {
  style: {},
  disabled: false,
};
