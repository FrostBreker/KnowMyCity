import React, { useState, useEffect } from 'react';
import { Card, CardImg, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';



function Viewer() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    if (isLoading === true) {
      axios.get("https://parisdata.opendatasoft.com/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=100&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs")
        .then((data) => {
          if (data) {
            setData(data.data.records);
            setIsLoading(false)
          } else return null
        })
    }
  }, [isLoading])

  console.log(data);


  return (
    <>
      {isLoading ? (
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="App">
          {
            data.map((d) => {
              if (d.fields.access_type === "obligatoire") {
                return (
                  <Card>
                    <CardImg src={d.fields.cover_url} style={{width:100, height:100, objectFit:'cover'}}></CardImg>
                    <Card.Title>{d.fields.title}</Card.Title>
                    <Card.Text>{d.fields.date_description}</Card.Text>
                    <Card.Text>{d.fields.address_street + " " + d.fields.address_zipcode + " " + d.fields.address_city}</Card.Text>
                    <Card.Text>{d.fields.price_detail}</Card.Text>
                    <Alert variant="danger">{d.fields.access_type}</Alert>
                  </Card >
                )
              }

              // if (d.fields.tags === "Cinéma") {



              // }
            })
          }
        </div >
      )
      }
    </>

  );
}

export default Viewer;