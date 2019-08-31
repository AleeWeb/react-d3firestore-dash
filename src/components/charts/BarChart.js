import React, { useEffect } from "react";
import firebase from "../../firebaseConfig";

const db = firebase.firestore();

export default function BarChart() {
  
    useEffect(() => {
        //Firestore database collection title is sales.
        db.collection('sales').get().then(res => { //database server response
            let data = [];
            res.docs.forEach(doc => {   //Firestore documents inside db collections
                data.push(doc.data()); //D3 data() method on the firestore doc to get the data in the doc.
            });
            console.log(data);

          
        });

    }, []); // Array for data

    return (
        <div className="canvas">
          
        </div>
    );

}

