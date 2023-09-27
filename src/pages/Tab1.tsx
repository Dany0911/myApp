/* import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Home page" />
      </IonContent>
    </IonPage>
  );
};


export default Tab1;
 */
import React from 'react';
import { IonButtons, IonContent, IonHeader, IonListHeader, IonLabel, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonApp, IonMenuToggle, IonList, IonItem, IonIcon, IonButton } from '@ionic/react';
import { home, information, newspaperOutline } from 'ionicons/icons';
const Tab1: React.FC = () => {
  return (
    <>
  <IonPage>
    <IonMenu content-id="main-content">
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
  <IonContent>
    <IonList>
      <IonListHeader>Navigate from here</IonListHeader>
        <IonMenuToggle auto-hide="false">
          <IonItem button routerLink="/tab1">
            <IonIcon icon={home}></IonIcon>
              <IonLabel>Home</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle auto-hide="false">
          <IonItem button routerLink="/tab2">
            <IonIcon icon={newspaperOutline}></IonIcon>
              <IonLabel>Contacts</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle auto-hide="false">
          <IonItem button routerLink="/tab3">
            <IonIcon icon={information}></IonIcon>
              <IonLabel>About</IonLabel>
          </IonItem>
        </IonMenuToggle>
    </IonList>
  </IonContent>
</IonMenu>
<div className="ion-page" id="main-content">
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
      </IonButtons>
        <IonTitle>Header</IonTitle>
    </IonToolbar>
</IonHeader>
<IonContent class="ion-padding">
  <h1>Main Content</h1>
    <p>Click the icon in the top left to toggle the menu.</p>
</IonContent>
</div>
</IonPage>
    </>
  );
}
export default Tab1;
