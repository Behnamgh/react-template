import React, { useContext } from 'react';
import { UserStateContext } from 'src/flux/user/state';

const HomePage = () => {
    const userState = useContext(UserStateContext);
    console.log(userState);

    return (
        <div>
            Home page ...
        </div>
    );
};

export default HomePage;