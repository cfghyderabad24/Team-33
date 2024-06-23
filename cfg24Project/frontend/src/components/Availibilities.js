import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Availability() {
  const facilities = [
    {
      title: 'Pesticides',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDXTuVD7kOr-z2zgbC29XjPXXWjxrHFyoFQ&usqp=CAU',
      link: 'https://www.iffcobazar.in/en/pesticides'
    },
    {
      title: 'Vermi Compost',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMrvdHTnp2lDrGrn6u6dmCMSYDO9wT7Ym3Q&usqp=CAU',
      link: 'https://sikrifarms.com/vermicompost-50kg.html'
    },
    {
      title: 'Farming Tools',
      img: 'https://cf.ltkcdn.net/antiques/images/orig/292825-1600x1066-assorted-antique-farm-tools.jpg',
      link: 'https://www.toolsvilla.com/category/farm?gclid=CjwKCAjw_YShBhAiEiwAMomsEN1xWXMAnNl30_FHibL5egu3XASaWQ7W2kyj_tvgH0GsC1uMM8p3bhoCMRgQAvD_BwE'
    },
    {
      title: 'Manure',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6Pk7qI2DmTsqqwD10oY1XRdi9kFY5Iv8zQ&usqp=CAU',
      link: 'https://www.ugaoo.com/collections/soil-manure'
    },
    {
      title: 'Fertilizers',
      img: 'https://media.istockphoto.com/id/858738370/vector/fertilizers.jpg?s=170667a&w=0&k=20&c=TlFfXn4ctxK_ienyC4wu_6xPTP1rzDyQKfqMAxeeKMQ=',
      link: 'https://agribegri.com/?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7428009962&hsa_cam=19279662195&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw_YShBhAiEiwAMomsELh1i_OSN_Uwf9mCeRzIqvRfDtlAzd4msJXmZqG7TuPUUpS1-pIeWhoCELIQAvD_BwE'
    },
    {
      title: 'Seeds',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnQj0Ib65oBourFaGdaimr0eLpAveObQDO9NYmjLQlvefmd0VOP3Fe_nfQOWwjMuv8po&usqp=CAU',
      link: 'https://www.iffcobazar.in/en/seeds/farmer-packs'
    }
  ];

  const containerStyle = {
    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-terraced-rice-field-water-season-top-view-rices-paddy-fieldthailand-generative-ai_1258-153055.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  };

  const cardStyle = {
    width: '100%',
    boxShadow: '2px 2px 7px gray'
  };

  const imgStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%'
  };

  const headerStyle = {
    color: 'rgb(0, 0, 0)'
  };

  return (
    <div className="container my-5" style={containerStyle}>
      <div className="row text-center mb-5">
        <div className="col">
          <h1 className="fs-1" style={headerStyle}>Various Facilities</h1>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {facilities.map((facility, index) => (
          <div className="col" key={index}>
            <div className="card border-dark" style={cardStyle}>
              <div className="card-header">
                <img className="img-fluid" src={facility.img} alt={facility.title} style={imgStyle} />
              </div>
              <div className="card-body">
                <h4 className="card-title text-success">{facility.title}</h4>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Availability;
