import React, { Component, useState } from 'react';
import useForm from 'react-hook-form';
import { RHFInput } from "react-hook-form-input";
import { connect } from 'react-redux';
import { actions } from "./../../../store/duck";
import { cardDataSelector, cardLoadSelector } from './../../../store/selectors';
import { theme } from './../Shared/theme';
import {
  Card,
  CardContent,
  TextField,
  Button,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

const mapStateToProps = state => {
  return {
    cardData: cardDataSelector(state),
    isLoadingCard: cardLoadSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    card: value => dispatch(actions.card(value)),
    getCard: () => dispatch(actions.getCard())
  }
};

const PaymentForm = ({ 
  cardData,
  card,
  isLoadingCard,
}) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();  
    card(data);
  };

  if(isLoadingCard) {
    return (
      <ThemeProvider theme={theme}>
        <Card>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              Данные загружаются...
            </Typography>
          </CardContent>
        </Card>
      </ThemeProvider>
    )
  } else {
    return ( 
      <ThemeProvider theme={theme}>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>
                  Номер карты <br/>
                  <RHFInput
                    as={<TextField type="text"/>}
                    name="cardNumber"
                    defaultValue={cardData.cardNumber}
                    register={register({ required: true })}
                  />
                  <Typography color="error">{errors.cardNumber && 'Введите номер карты'}</Typography>
                </label>
              </div>
              <div>
                <label>
                  Срок действия <br/>
                  <RHFInput
                    as={<TextField type="month"/>}
                    name="expiryDate"
                    defaultValue={cardData.expiryDate}
                    register={register({ required: true })}
                  />
                  <Typography color="error">{errors.expiryDate && 'Введите срок действия карты'}</Typography>              
                </label>
              </div>
              <div>
                <label>
                  Имя владельца <br/>
                  <RHFInput
                    as={<TextField/>}
                    name="cardName"
                    defaultValue={cardData.cardName}
                    register={register({ required: true })}
                  />
                  <Typography color="error">{errors.cardName && 'Введите имя владельца карты'}</Typography>              
                </label>
              </div>
              <div>
                <label>
                  CVC <br/>
                  <RHFInput
                    as={<TextField type="number"/>}
                    name="cvc"
                    defaultValue={cardData.cvc}
                    register={register({ required: true })}
                  />
                  <Typography color="error">{errors.cvc && 'Введите cvc код с обратной стороны карты'}</Typography>              
                </label>
              </div>
              <div>
                <br/>
                <Button type="submit" variant="containedPrimary">Сохранить</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </ThemeProvider>
    );
  }  
}
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PaymentForm);