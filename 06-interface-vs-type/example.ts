interface Notification {
  recipient: string; //"nombre del destinatario"
  mensaje: string;
}

interface NotificationEmail extends Notification {
  email: string;
}

interface NotificationSmS extends Notification {
  phone: string;
}

interface NotiticationMobile extends Notification {}

interface NotiticationIoT extends Notification {}

type Enviable =
  NotificationEmail | NotificationSmS | NotiticationMobile | NotiticationIoT;

function sent(payload: Enviable) {
  // codigo necesario para mandar una notificacion
}
