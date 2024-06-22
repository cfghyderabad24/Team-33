import React from "react";

const schemes = [
  {
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description:
      "PMFBY is an insurance scheme for farmers that covers crop losses due to natural calamities, pests, and diseases. The premium rates for PMFBY are highly subsidized by the government, and the scheme is mandatory for farmers who have taken crop loans from banks.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngwlJw2g9QNmzhwmC6lTrjfvNfoisKF4_7XJR4RVTwKuamO8NsJ1L1xQvtmSi9SA1FBY9OGOVvEg&usqp=CAU&ec=48665699",
    link: "https://pmfby.gov.in/",
  },
  {
    title: "Pradhan Mantri Kisan Samman Nidhi Yojana (PM-KISAN)",
    description:
      "PM-KISAN is a direct income support scheme for farmers that provides financial assistance of Rs. 6000 per year to eligible small and marginal farmers. The assistance is transferred directly to the bank accounts of the beneficiaries in three equal installments.",
    imageUrl:
      "https://www.ibc24.in/wp-content/uploads/2022/08/PM-Kisan-Scheme.jpg",
    link: "https://pmkisan.gov.in/",
  },
  {
    title: "Paramparagat Krishi Vikas Yojana (PKVY)",
    description:
      "PKVY is a scheme for the promotion of organic farming in India. Under this scheme, farmers are provided financial assistance for adopting organic farming practices and for the certification of their organic produce. The scheme also provides training and capacity building support to farmers.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DdOU2gNWq3spEstjwsvuVqxXxN7jlpTcMLNGxZitjQ&usqp=CAU&ec=48665699",
    link: "https://dmsouthwest.delhi.gov.in/scheme/paramparagat-krishi-vikas-yojana/",
  },
  {
    title: "Rythu Bandhu Scheme",
    description:
      "Telangana Government has proposed a new scheme for providing investment support to Agriculture and Horticulture crops by way of a grant @ Rs.5000/- per Acre per Farmer in each season (Kharif & Rabi) for purchase of inputs like Seeds, Fertilizers, Pesticides, towards Labour and other Investments in the field operations of farmers choice for the crop season.",
    imageUrl:
      "https://4.bp.blogspot.com/-wqQQfFyGMQQ/WvPq8f86oNI/AAAAAAAAWOQ/ps4dqGlvYs8FmdDdtRcdYz4thfSYjgBPACLcBGAs/s1600/Rythu%2BBandhu%2Bpng%2Blogo%2Bfree%2Bdownloads.png",
    link: "http://rythubandhu.telangana.gov.in/Default_RB1.aspx",
  },
  {
    title: "Rythu Bandhu - Farmers Group Life Insurance Scheme: (Rythu Bhima)",
    description:
      "Telangana Government decided to implement the prestigious scheme of 'Rythu Bandhu Group Life Insurance Scheme for Farmers' for the welfare of farming community in the State. The main objective of the scheme is to provide immediate and adequate financial relief to bereaved family members/dependents of the farmer in case of his/her death due to any reason. Majority of the farmers are small and marginal farmers and farming is the sole source of livelihood to them. In the event of death of the bread earner, the dependent family members will land in distress due to financial problems. The sum assured Rs 5,00,000/- payable to the Nominee designated by the insured farmer.",
    imageUrl:
      "https://cm.telangana.gov.in/wp-content/uploads/2022/07/Rythu-Bima.jpg",
    link: "http://rythubandhu.telangana.gov.in/Default_LIC1.aspx",
  },
  {
    title: "Soil Health Card Scheme (SHC)",
    description:
      "“Soil Health Management (SHM) is one of the most important interventions under NMSA, SHM aims at promoting Integrated Nutrient Management (INM) through judicious use of chemical fertilizers including secondary and micro nutrients in conjunction with organic manures and bio-fertilizers for improving soil health and its productivity; strengthening of soil and fertilizer testing facilities to provide soil test based Agricultural related schemes in Telangana recommendations to farmers for improving soil fertility; ensuring quality control requirements of fertilizers, bio-fertilizers and organic fertilizers under Fertilizer Control Order, 1985; up gradation of skill and knowledge of soil testing laboratory staff, extension staff and farmers through training and demonstrations; promoting organic farming practices etc.",
    imageUrl:
      "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/2/2022/04/15184010/SOIL-HEALTH-CARDSHC-01-2.png",
    link: "https://www.soilhealth.dac.gov.in/home",
  },
];

const Schemes = () => {
  return (
    <div>
      <header style={styles.header}>
        <h1>Government Schemes for Farmers</h1>
      </header>
      <nav style={styles.nav}>
        <a href="#" style={styles.navLink}>
          Home
        </a>
        <a href="#" style={styles.navLink}>
          About
        </a>
        <a href="#" style={styles.navLink}>
          Contact
        </a>
      </nav>
      <div style={styles.container}>
        {schemes.map((scheme, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.row}>
              <div style={styles.colMd4}>
                <img src={scheme.imageUrl} alt={scheme.title} style={styles.img} />
              </div>
              <div style={styles.colMd8}>
                <div style={styles.cardBody}>
                  <h5 style={styles.cardTitle}>{scheme.title}</h5>
                  <p style={styles.cardText}>{scheme.description}</p>
                  <a href={scheme.link} style={styles.button}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  header: {
    textAlign: "center",
    padding: "1rem 0",
    backgroundColor: "#4caf50",
    color: "white",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#333",
    padding: "0.5rem 0",
  },
  navLink: {
    color: "white",
    padding: "0.5rem 1rem",
    textDecoration: "none",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #4caf50",
    borderRadius: "8px",
    margin: "1rem 0",
    maxWidth: "1000px",
    width: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  colMd4: {
    flex: "1",
  },
  colMd8: {
    flex: "2",
  },
  img: {
    width: "100%",
    height: "auto",
  },
  cardBody: {
    padding: "1rem",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardText: {
    margin: "1rem 0",
  },
  button: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    backgroundColor: "#4caf50",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
  },
};

export default Schemes;
