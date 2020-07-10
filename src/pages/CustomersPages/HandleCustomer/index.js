import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Alert } from 'react-native';
import { Form } from '@unform/mobile';
import ImagePicker from 'react-native-image-crop-picker';
import * as Yup from 'yup';

import getValidationErrors from '../../../utils/getValidationErrors';
// import api from '../../../services/api';

import colors from '../../../styles/colors';
import strings from '../../../assets/strings';

import AutoComplete from '../../../components/AutoCompleteMultiple';
import LoadingModal from '../../../components/LoadingModal';
import ImagesModal from '../../../components/ImagesModal';
import TagsModal from '../../../components/TagsModal';

import DefaultLayout from '../../__layout/DefaultLayout';

import {
  StyledScrollView,
  FormContainer,
  FormInput,
  FormInputMasked,
  FormSelect,
  Wrapper,
  InputTitle,
  StyledFileInput,
  StyledAddButton,
  SaveButton,
} from './styles';

export default function HandleCustomer() {
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const scrollViewRef = useRef(null);

  const [shopList, setShopList] = useState([]);
  const [customerAvatar, setCustomerAvatar] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadShops() {
      // const response = await api.get(`/shops`);

      const response = {
        data: [
          {
            id: 1,
            name: 'teste',
            city: 'São Paulo',
            province: 'SP',
            created_at: '2020-06-15 13:41:37',
          },
          {
            id: 2,
            name: 'Testando Select',
            city: 'Bonópolis',
            province: 'GO',
            created_at: '2020-06-15 17:57:42',
          },
          {
            id: 3,
            name: 'Lojanova',
            city: 'São Paulo',
            province: 'AC',
            created_at: '2020-06-15 15:03:43',
          },
          {
            id: 4,
            name: 'Center Car',
            city: 'Areado',
            province: 'MG',
            created_at: '2020-06-14 13:44:08',
          },
          {
            id: 5,
            name: 'Nova loja',
            city: 'Brasiléia',
            province: 'AC',
            created_at: '2020-06-15 14:27:43',
          },
        ],
      };

      const shops = response.data.map((shop) => ({
        ...shop,
        label: `${shop.name}/${shop.city}`,
        value: shop.id,
      }));

      setShopList(shops);
    }

    async function loadTags() {
      // const response = await api.get(`/specifications`);

      const response = {
        data: [
          {
            id: 1,
            name: 'TAGNOVA',
            created_at: '2020-06-15 10:36:42',
            updated_at: '2020-06-15 10:36:42',
          },
          {
            id: 2,
            name: 'TESTE1',
            created_at: '2020-06-15 10:45:36',
            updated_at: '2020-06-15 10:45:36',
          },
          {
            id: 3,
            name: 'TESTE2',
            created_at: '2020-06-15 10:57:09',
            updated_at: '2020-06-15 10:57:09',
          },
          {
            id: 4,
            name: 'TESTE3',
            created_at: '2020-06-15 10:57:09',
            updated_at: '2020-06-15 10:57:09',
          },
          {
            id: 5,
            name: 'TURBO',
            created_at: '2020-06-15 12:28:49',
            updated_at: '2020-06-15 12:28:49',
          },
          {
            id: 6,
            name: 'MANUAL',
            created_at: '2020-06-15 12:28:49',
            updated_at: '2020-06-15 12:28:49',
          },
          {
            id: 7,
            name: 'AZUL',
            created_at: '2020-06-15 12:28:49',
            updated_at: '2020-06-15 12:28:49',
          },
          {
            id: 8,
            name: 'CRIADA',
            created_at: '2020-06-15 13:22:53',
            updated_at: '2020-06-15 13:22:53',
          },
          {
            id: 9,
            name: 'ADICIONADA',
            created_at: '2020-06-15 13:27:35',
            updated_at: '2020-06-15 13:27:35',
          },
          {
            id: 10,
            name: 'HAHAHA',
            created_at: '2020-06-15 14:00:11',
            updated_at: '2020-06-15 14:00:11',
          },
        ],
      };

      setTagList(response.data);
    }

    loadShops();
    loadTags();
  }, []);

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});
      setLoading(true);

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome requerido'),
        email: Yup.string()
          .required('E-mail requerido')
          .max(34, 'Máximo 34 caracteres')
          .email('Formato de e-mail inválido'),
        phone: Yup.string()
          .min(10, 'Formato inválido')
          .max(11, 'Formato inválido')
          .required('Telefone requerido'),
        shop_id: Yup.number().typeError('Selecione uma loja'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // ENVIO DA MENSAGEM PARA API
      console.tron.log(data);
    } catch (err) {
      err.name === 'ValidationError'
        ? formRef.current?.setErrors(getValidationErrors(err))
        : Alert.alert(
            'Falha no cadastro',
            'Verifique os dados, tente novamente'
          );
    } finally {
      setLoading(false);
    }
  }, []);

  const handleScrollToEnd = useCallback(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, []);

  const handleAvatar = useCallback(async () => {
    const selectedImage = await ImagePicker.openPicker({
      width: 88,
      height: 165,
      cropping: true,
    });

    if (selectedImage) {
      const newImage = [
        {
          secure_url: selectedImage.path,
        },
      ];

      setCustomerAvatar(newImage);
    }
  }, []);

  return (
    <DefaultLayout>
      <LoadingModal loading={loading} />
      <StyledScrollView ref={scrollViewRef}>
        <FormContainer>
          <Form ref={formRef} initialData={{}} onSubmit={handleSubmit}>
            <FormInput
              title={`${strings.input_name}`}
              name="name"
              autoCapitalize="words"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
            />
            <FormInput
              ref={emailRef}
              title={`${strings.input_email}`}
              name="email"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => phoneRef.current.focus()}
            />
            <FormInputMasked
              ref={phoneRef}
              title={`${strings.input_phone}`}
              name="phone"
              type="cel-phone"
              keyboardType="phone-pad"
              returnKeyType="next"
            />
            <FormSelect
              disabled={false}
              title={`${strings.input_shop}`}
              name="shop_id"
              items={shopList}
            />

            <Wrapper>
              <StyledFileInput title={`${strings.input_photos}`} />
              <StyledAddButton onPress={handleAvatar} />
            </Wrapper>

            {(customerAvatar[0] && (
              <ImagesModal
                images={customerAvatar}
                setImages={setCustomerAvatar}
              />
            )) || <View style={{ marginTop: 30 }} />}

            <View style={{ flex: 1 }}>
              <InputTitle>{strings.input_interests}</InputTitle>
              <AutoComplete
                options={tagList}
                selectedOptions={selectedTags}
                setSelectedOptions={setSelectedTags}
                onFocus={handleScrollToEnd}
              />
            </View>

            {(selectedTags.length > 0 && (
              <TagsModal tags={selectedTags} setTags={setSelectedTags} />
            )) || <View style={{ marginTop: 60 }} />}

            <SaveButton
              name="save"
              backgroundColor={colors.primary}
              loading={loading}
              onPress={() => formRef.current?.submitForm()}
            >
              {strings.submit_button_save}
            </SaveButton>
          </Form>
        </FormContainer>
      </StyledScrollView>
    </DefaultLayout>
  );
}
