import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import profilepic from '../images/profile.jpg'; // Import the image
import './About.css';

const Products: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Scrum9 Assignment 1 - Ionic</IonTitle>
            <IonButtons slot="end">
            <Link to="/Home">
              <IonButton>
                Home
              </IonButton>
            </Link>
            <Link to="/Products">
              <IonButton>
                Products
              </IonButton>
            </Link>
          </IonButtons>
  
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="profile">
            <img src={profilepic} alt="About Image" className="centered-image" />
            <div className="name">Jamaal Henry</div>
            <div className="team">The Turing Team</div>
            <div className="summary">
            My name is Jamaal Henry, a final-year student at the University of the West Indies, currently
            pursuing a Bachelor of Science in Computer Science. I decided to pursue a career in this field
            because, since childhood, I have had a strong interest in technology, which has increased
            exponentially with age. My other interests include sports. I enjoy watching football and had a period
            in my youth where I played cricket, but my true love is basketball, which I play as often as I can. I also
            spend large amounts of time being a cinephile, car enthusiast, and online gamer. I have been
            described as a driven problem solver, and I vehemently enjoy working in an environment that
            encourages collaboration and communication as I am motivated by the opportunity to learn and
            grow. I am also a lifelong learner and am committed to staying up-to-date with the latest
            technologies. My technical strengths include a strong background in software engineering, data
            structures, and algorithms, but I am always willing to learn new skills. My experience in the field has
            encapsulated several projects, the most notable of which are a recipe recommendation system and a
            database management system. Currently, my interests in computer science lie mostly in data science
            and artificial intelligence. I find them to be very intriguing, as they hold the key to further
            advancements in technological development.
            </div>
        </div>
        </IonContent>
      </IonPage>
    );
  };

export default Products;
