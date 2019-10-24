import React from 'react';

class ProfileForm extends React.Component {
    render() {
        return(
            <>
                <form action="" on>
                    <label>
                        Name: 
                        <input name="firstName" type="text"/>
                    </label>
                    <label>
                        Surname: 
                        <input name="lastName" type="text"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }
}

export default ProfileForm;