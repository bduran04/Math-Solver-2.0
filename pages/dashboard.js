import GenericLayout from "../layout/genericLayout";
import {supabase} from "../utils/supabaseClient";
import {useState, useEffect} from "react";

//create a way that displays the data when click on study guide
//4) redirect the user to the study guide/dashboard page
//5) on studyguide page load, use a useEffect & check the session username + password & retrieves studyguides

const Dashboard = () => {
    const [studyGuidedata, setStudyGuideData] = useState();
    const fetchStudyGuideData = async () => {
        let { data, error } = await supabase
            .from('Study_Guides')
            .select("*")
            //update value to display the logged in user
            .filter("created_by", "eq", "Kitsune")
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