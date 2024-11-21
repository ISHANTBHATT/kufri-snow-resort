// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;
// const appUrl = process.env.NEXTAUTH_URL;

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: email,
//     pass,
//   },
// });

// export async function POST(request) {
//   try {
//     const {
//       decodedId,
//       name,
//       useremail,
//       mobile,
//       StartDate,
//       EndDate,
//       NoofAdult,
//       NoofChildren,
//     } = await request.json();

//     // const formattedDate = new Date(bookingData.date).toDateString();
//     // const returnDate = bookingData.returnTrip
//     //   ? `\nReturn Date: ${new Date(bookingData.returnDate).toLocaleString()}`
//     //   : "";
//     // Send confirmation email to the user
//     await transporter.sendMail({
//       from: email,
//       to: useremail,
//       subject: "Booking Request Received",
//       html: `<p>Hello ${name},</p>
//       <p>Your booking details are sent to the Hotel. When it gets confirmed, you will be notified.</p>
//       <p><strong>Booking Details:</strong></p>
//       <ul>
//         <li><strong>No Of Audult:</strong> ${NoofAdult}</li>
//         <li><strong>No Of Children:</strong> ${NoofChildren}</li>
//         <li><strong>Date:</strong> ${formattedDate} </li>
//          <li><strong> Date:</strong> ${new Date(StartDate)}</li>
//          <li><strong>Date:</strong> ${new Date(EndDate)}</li>

//         <li><strong>Our WhatsApp:</strong>+221-78 750 79 89</li>
//       </ul>

//       <p>Thank you for booking with us!</p>`,
//     });

//     // Send notification email to the admin with the confirmation button
//     const confirmationUrl = `${appUrl}/api/confirm-booking?bookingId=${dataid}`;
//     const adminEmailContent = `
//       <p>Admin,</p>
//       <p>A new ride has been booked.</p>
//       <p><strong>Booking Details:</strong></p>
//       <ul>
//         <li><strong>UserName:</strong> ${userName}</li>
//         <li><strong>User Email:</strong> ${useremail}</li>
//         <li><strong>No Of Audult:</strong> ${bookingData.noOfAudult}</li>
//         <li><strong>No Of Children:</strong> ${bookingData.noOfChild}</li>
//          <li><strong>Date:</strong> ${new Date(StartDate)}</li>
//          <li><strong>Date:</strong> ${new Date(EndDate)}</li>
//         <li><strong>Phone Number:</strong> ${phone}</li>
//       </ul>
//       <p>Please confirm availability for the ride by clicking the button below:</p>
//       <a href="${confirmationUrl}" style="display: inline-block; padding: 10px 20px; color: white; background-color: orange; text-decoration: none; border-radius: 5px;">Confirm Booking</a>
//     `;

//     await transporter.sendMail({
//       from: email,
//       to: email,
//       subject: "New Room Booking",
//       html: adminEmailContent,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { format } from "date-fns";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
// const appUrl = process.env.NEXTAUTH_URL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export async function POST(request) {
  try {
    const {
      decodedId,
      name,
      useremail: userEmail,
      mobile,
      StartDate,
      EndDate,
      NoofAdult,
      NoofChildren,
    } = await request.json();
    // console.log("email data", request);

    const formattedStartDate = format(new Date(StartDate), "MMMM dd, yyyy");
    const formattedEndDate = format(new Date(EndDate), "MMMM dd, yyyy");

    // Send confirmation email to the user
    await transporter.sendMail({
      from: email,
      to: userEmail,
      subject: "Booking Request Received",
      html: `
        <p>Hello ${name},</p>
        <p>Your booking details have been sent to the Hotel. You will be notified when it is confirmed.</p>
        <p><strong>Booking Details:</strong></p>
        <ul>
          <li><strong>Room Type:</strong> ${decodedId}</li>
          <li><strong>Number of Adults:</strong> ${NoofAdult}</li>
          <li><strong>Number of Children:</strong> ${NoofChildren}</li>
          <li><strong>Check-in Date:</strong> ${formattedStartDate}</li>
          <li><strong>Check-out Date:</strong> ${formattedEndDate}</li>
          <li><strong>Our WhatsApp:</strong> +221-78 750 79 89</li>
        </ul>
        <p>Thank you for booking with us!</p>
      `,
    });

    // Send notification email to the admin
    const adminEmailContent = `
      <p>Admin,</p>
      <p>A new room has been booked.</p>
      <p><strong>Booking Details:</strong></p>
      <ul>
        <li><strong>Room Type:</strong> ${decodedId}</li>
        <li><strong>Guest Name:</strong> ${name}</li>
        <li><strong>Guest Email:</strong> ${userEmail}</li>
        <li><strong>Number of Adults:</strong> ${NoofAdult}</li>
        <li><strong>Number of Children:</strong> ${NoofChildren}</li>
        <li><strong>Check-in Date:</strong> ${formattedStartDate}</li>
        <li><strong>Check-out Date:</strong> ${formattedEndDate}</li>
        <li><strong>Phone Number:</strong> ${mobile}</li>
      </ul>
      <p>Please confirm availability for this booking.</p>
    `;

    await transporter.sendMail({
      from: email,
      to: email,
      subject: "New Room Booking",
      html: adminEmailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
