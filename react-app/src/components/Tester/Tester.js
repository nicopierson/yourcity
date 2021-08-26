import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCity, getAllCities, removeCity, updateCity, createCity, resetCities } from '../../store/city';

const Tester = () => {
    const dispatch = useDispatch();

    const getCities = async () => {
        // const res = await dispatch(getAllCities());
        // await dispatch(resetCities())
        // const res = await dispatch(getCity(3))

        // const payload = {
        //     description: "Test description",
            // id: 23,
        //     name: "The city",
        //     thumbnail_img: "",
        //     user_id: 1
        // }

        // const res = await dispatch(updateCity(payload))


        // const res = await dispatch(removeCity(23))

        // console.log('res ', res);
        // return res;
    };

    useEffect(() => {
        // dispatch reslults will only print as a pending promise inside a use effect
        // const result = getCities();
        // console.log('result', result);

        // better to use a helper function to handle the dispatch and receive values
        getCities();
    }, [dispatch]);

    return (
        <div>
            <h2>Tester Component</h2>
        </div>
    );
};

export default Tester;