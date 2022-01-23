import GenericLayout from "../layout/genericLayout";
import {supabase} from "../utils/supabaseClient";
import {useState, useEffect} from "react";
import {Grid, Image} from "@geist-ui/react";

//create a way that displays the data when click on study guide

const Dashboard = () => {
    const [studyGuidedata, setStudyGuideData] = useState();
    const fetchStudyGuideData = async () => {
        let { data, error } = await supabase
            .from('Study_Guides')
            .select("*")
            //params for showing which study guide to populate
            .filter("created_by", "eq", "mittens")
        console.log(data)
        setStudyGuideData(data);
    }
    useEffect(() => {
      fetchStudyGuideData();
    }, []);

    return (
        //remove the logout button
        <GenericLayout>
            <div>Hello dashboard page</div>
            {studyGuidedata && <div>
                {studyGuidedata.map((data,i) => <div key={data.created_at + i}>{data.name}</div>)}
            </div>}
        </GenericLayout>
    )
}

export default Dashboard