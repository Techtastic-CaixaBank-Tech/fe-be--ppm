import IonIcon from '@reacticons/ionicons';

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center pt-10 gap-6">
      <img
        className="h-20 w-20 rounded-full"
        src="https://e7.pngegg.com/pngimages/715/763/png-clipart-la-caixa-business-santander-group-caixabank-logo-business-blue-people.png"
        alt="new"
      />
      <div className="flex flex-col items-center">
        <IonIcon name="home-outline" size="large" />
        <p>Home</p>
      </div>
      <div className=" w-1/2 h-0.5 bg-white" />
      <div className="flex flex-col items-center">
        <IonIcon name="list-outline" size="large" />
        <p>Listas</p>
      </div>
      <div className=" w-1/2 h-0.5 bg-white" />
      <div className="flex flex-col items-center">
        <IonIcon name="folder-outline" size="large" />
        <p>Archuvos</p>
      </div>
    </div>
  );
}
