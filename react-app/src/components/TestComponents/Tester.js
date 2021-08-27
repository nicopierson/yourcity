import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCity, getCitiesByUser, getAllCities, removeCity, updateCity, 
    createCity, resetCities } from '../../store/city';
import { getInsight, getInsightsByUser, getInsightsByCity, getAllInsights, 
    removeInsight, updateInsight, createInsight, resetInsights } from '../../store/insight';

const Tester = () => {
    const dispatch = useDispatch();

    const getCities = async () => {
        // const res = await dispatch(getAllCities());
        // await dispatch(resetCities());
        // const res = await dispatch(getCity(3));

        // const payload = {
        //     description: "Test descriptiondsgdfgsd",
        //     id: 26,
        //     name: "The city",
        //     thumbnail_img: "",
        //     user_id: 1
        // }

        // const res3 = await dispatch(updateCity(payload))
        // const res = await dispatch(createCity(payload))


        // const res = await dispatch(removeCity(25))

        // const res2 = await dispatch(getCity(9))
        // const res = await dispatch(getCitiesByUser(1))

        // console.log('res ', res);
        // return res;
    };

    const getInsights = async () => {
        // const res = await dispatch(getAllInsights());
        // await dispatch(resetInsights())
        // const res = await dispatch(getInsight(3))

        // const id = 32;
        // const payload = {
        //     id: id,
        //     insight: "Test the insight AGAINgyutyutruytfuy",
        //     city_id: 1,
        //     user_id: 1,
        // }

        // const res3 = await dispatch(createInsight(payload))
        // const res = await dispatch(updateInsight(payload))


        // const res4 = await dispatch(removeInsight(id))

        // const res = await dispatch(getInsightsByUser(1))
        // const res6 = await dispatch(getInsightsByCity(2))
        // const res2 = await dispatch(getInsightsByCity(3))

        // console.log('res ', res);
        // return res;
    };

    useEffect(() => {
        // dispatch reslults will only print as a pending promise inside a use effect
        // const result = getCities();
        // console.log('result', result);

        // better to use a helper function to handle the dispatch and receive values
        getCities();
        getInsights();
    }, [dispatch]);

    return (
        <div>
            <h2>Tester Component</h2>
        </div>
    );
};

export default Tester;