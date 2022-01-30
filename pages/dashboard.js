import GenericLayout from "../layout/genericLayout";
import {supabase} from "../utils/supabaseClient";
import {useState, useEffect} from "react";
import {Grid, Image} from "@geist-ui/react";

//create a way that displays the data when click on study guide
//1) user enters name + passowrd & clicks login
//2) the app takes the username + password & send to supabase and checks to see if they match
//3) if a 200 is returned, set the username as the cookie
//4) redirect the user to the study guide page
//5) on studyguide page load, use a useEffect & check the session username + password & retrieves studyguides

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