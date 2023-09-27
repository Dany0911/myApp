import { IonButtons, IonContent, IonHeader, IonListHeader, IonLabel, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonMenuToggle, IonList, IonItem, IonIcon } from '@ionic/react';
import { home, newspaperOutline, information } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
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
          <IonItem button routerLink="/tab3">
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
  <h1>Contacts</h1>
  <p>user23.nd@gmail.com</p>
   <p>Click the icon in the top left to toggle the menu.</p>
</IonContent>
</div>
</IonPage>
    </>
  );
}

export default Tab2;
