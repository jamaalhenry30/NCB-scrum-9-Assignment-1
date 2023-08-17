import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonButtons} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

import './Products.css';

const productsData = [
    {
        id: 1,
        title: 'Serene Chromatic Symphony',
        image: 'src/images/img1.jpeg',
        price: '455430.99',
        description: "Experience the captivating world of Serene Chromatic Symphony, a masterpiece that transcends the ordinary and invites you to immerse yourself in a realm of colors, textures, and emotions. Created by a visionary artist, this painting is a celebration of artistic expression, where each brushstroke dances harmoniously to compose a symphony of serenity."
    },
    {
        id: 2,
        title: 'Crimson Dreamscape: Whispers of the Scarlet Forest',
        image: 'src/images/img2.jpeg',
        price: '54545.43',
        description: 'Step into the enchanting world of "Crimson Dreamscape," a mesmerizing painting that beckons you to explore the mystical depths of the Scarlet Forest. Crafted by the deft hand of an imaginative artist, this masterpiece captures the essence of a realm where reality and fantasy entwine.'
    },
    {
        id: 3,
        title: 'Starry Reverie: Celestial Whispers in Midnight Hues',
        image: 'src/images/img3.jpeg',
        price: '43533.44',
        description: 'Behold the mesmerizing canvas of "Starry Reverie," a captivating painting that invites you to lose yourself amidst a celestial dreamscape painted in the enchanting palette of midnight hues. The artists skilled hand weaves a tale of cosmic wonder, where stars twinkle like distant promises and galaxies unfold like chapters in a cosmic book.'
    },
    {
        id: 4,
        title: "Eternal Harmony: Fusion of Nature and Technology",
        image: 'src/images/img4.jpeg',
        price: '556423.22',
        description: 'Enter the realm of "Eternal Harmony," a visionary painting that encapsulates the seamless convergence of nature and technology. With each brushstroke, the artist unveils a world where the organic and the mechanical intertwine, creating a mesmerizing symphony of balance and coexistence.'
    },
    {
        id: 5,
        title: "Whispers of Time: A Journey Through Ancient Echoes",
        image: 'src/images/img5.jpeg',
        price: '23354.56',
        description: 'Embark on a captivating journey through the corridors of history with "Whispers of Time," a evocative painting that captures the essence of bygone eras and tales untold. The artist"s brush has breathed life into the canvas, inviting you to explore the intricate tapestry of human experiences that have shaped our world.'
    }

  ];

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
          <Link to="/About">
            <IonButton>
              About
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
        <div className="centered-text">
            <h2>Products</h2>
        </div>
        <div className="products-list">
        {productsData.map((product) => (
          <IonCard className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <IonCardHeader>
              <IonCardTitle>{product.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
            </IonCardContent>
          </IonCard>
        ))}
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Products;
