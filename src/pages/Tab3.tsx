import { IonButtons, IonContent, IonHeader, IonListHeader, IonLabel, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonApp, IonMenuToggle, IonList, IonItem, IonIcon, IonButton } from '@ionic/react';
import { home, information, newspaperOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
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
  <h1>About</h1>
  <h2>My first ionic app</h2>
   <p>I'm just playing around to see how everything works.</p>
</IonContent>
</div>
</IonPage>
    </>
  );
}
export default Tab3;
