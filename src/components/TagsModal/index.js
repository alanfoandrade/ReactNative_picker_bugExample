import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import {
  ModalTagListContainer,
  ModalTagList,
  TagContainer,
  RemoveTagButton,
  TextContainer,
  ModalTagItem,
} from './styles';

export default function TagsModal({ tags, setTags }) {
  function handleTagRemove(tag) {
    setTags(
      tags.filter((t) => t.specification.name !== tag.specification.name)
    );
  }

  return (
    <ModalTagListContainer>
      <ModalTagList horizontal>
        {tags.map((tag) => (
          <TagContainer key={tag.specification.name}>
            <RemoveTagButton
              onPress={() => {
                handleTagRemove(tag);
              }}
            >
              <Text style={{ fontSize: 35, color: '#FFF', marginBottom: 5 }}>
                -
              </Text>
            </RemoveTagButton>
            <TextContainer>
              <ModalTagItem>{tag.specification.name}</ModalTagItem>
            </TextContainer>
          </TagContainer>
        ))}
      </ModalTagList>
    </ModalTagListContainer>
  );
}

TagsModal.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setTags: PropTypes.func.isRequired,
};
