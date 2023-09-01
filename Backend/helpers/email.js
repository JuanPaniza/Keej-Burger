import nodemailer from "nodemailer";

export const emailSingUp = async (data) => {
  const { email, name, token } = data;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"Keej-Burger - Administrador" <kb@keejburger.com>',
    to: email,
    subject: "Confirmación de cuenta en Keej-Burger",
    text: "Confirmación de cuenta en Keej-Burger",
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; text-align: center; background-color: #f7ebcd;">
        <p style="font-size: 18px; margin-bottom: 0;"><strong>¡HOLA ${name.toUpperCase()}!</strong></p>
        <p style="margin-top: 20px;">Espero que te encuentres muy bien. Queremos informarte que tu cuenta en Keej-Burger está a punto de estar lista.</p>

        <p style="margin-bottom: 30px;">Por favor, sigue el enlace  para verificar tu cuenta:</p>
        <a href="${
          process.env.URL_DOMAIN
        }/es/confirm/${token}" style="background-color: #74ad1e; color: white;  padding: 10px 20px; text-decoration: none; border-radius: 5px;">Comprobar Cuenta</a>
        
        <p style="margin-top: 30px;">Si en algún momento no reconoces esta cuenta o no has solicitado su creación, puedes ignorar este mensaje.</p>

        <br>

        <p style="font-size: 18px;">Saludos cordiales,<br>Equipo Keej-Burger</p>
        <img src="https://res.cloudinary.com/dvzzz5dwi/image/upload/v1691617166/LOGOKB_yqu04m.png" style="width: 20%; height: auto; display: block; margin: 0 auto 20px;"/>
    </div>
    `,
  });
};

export const emailForgetPassword = async (data) => {
  const { email, name, token } = data;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  //Información del email

  const info = await transport.sendMail({
    from: '"Keej-Burger - Administrador" <kb@keejburger.com>',
    to: email,
    subject: "Restablecer contraseña en Keej-Burger",
    text: "Restablecer contraseña en Keej-Burger",
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; text-align: center; background-color: #f7ebcd;">

    <p style="font-size: 18px; margin-bottom: 30px;"><strong>¡HOLA ${name.toUpperCase()}!</strong></p>
        <p style="margin-top: 20px; margin-bottom: 30px;">Recibes este correo porque has solicitado restablecer tu contraseña en Keej-Burger. Por favor, sigue el enlace a continuación para cambiar tu contraseña:</p>
        
       
       <a href="${
        process.env.URL_DOMAIN
      }/es/newPassword/${token}" style=" margin-bottom: 30px; background-color: #74ad1e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Restablecer Cuenta</a>
        <p style="margin-top: 30px;">Si no has solicitado este restablecimiento, puedes ignorar este mensaje.</p>
        
        <br>
        
        <p style="font-size: 18px; margin-top: 30px;">Saludos cordiales,<br>Equipo Keej-Burger</p>
        <img src="https://res.cloudinary.com/dvzzz5dwi/image/upload/v1691617166/LOGOKB_yqu04m.png" style="width: 20%; height: auto; display: block; margin: 0 auto 30px;"/>

    
    </div>
    `,
  });
};
