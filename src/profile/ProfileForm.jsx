import React from 'react';

class ProfileForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    const card_number = event.target.card_number.value;

    console.log(card_number);

    window.location.href = "#/map";
  };

  render() {
    return(
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            Номер карты
            <input name="card_number" type="number"/>
          </label>
          <br />
          <input type="submit" value="Сохранить"/>
        </form>
      </>
    )
  }
}

export default ProfileForm;