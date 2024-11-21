// "use client";
// import { useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { toast } from "@/components/ui/toast";

// export default function BookingForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const { id } = useParams();
//   const form = useForm({
//     defaultValues: {
//       name: "",
//       mobile: "",
//       email: "",
//     },
//   });

//   useEffect(() => {
//     const savedFormData = localStorage.getItem("Hotelbookingdetail");
//     if (savedFormData) {
//       const parsedData = JSON.parse(savedFormData);
//       setBookingDetails(parsedData);
//     }
//   }, []);

//   async function onSubmit(data) {
//     setIsSubmitting(true);
//     try {
//       // Here you would typically send the data to your API endpoint
//       const response = await fetch("/api/send-booking-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) throw new Error("Failed to send booking");

//       toast({
//         title: "Booking Submitted!",
//         description: "We'll send you a confirmation email shortly.",
//       });
//       form.reset();
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Something went wrong. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <div className="py-20 flex">
//       <Card className="w-full max-w-md mx-auto">
//         <CardHeader>
//           <CardTitle className="text-2xl">Guest Details</CardTitle>
//           <CardDescription>
//             Please fill in your information to book your stay.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 rules={{ required: "Name is required" }}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter your full name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="mobile"
//                 rules={{
//                   required: "Mobile number is required",
//                   pattern: {
//                     value: /^[0-9]{10,}$/,
//                     message: "Please enter a valid mobile number",
//                   },
//                 }}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Mobile Number</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Enter your mobile number"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="email"
//                 rules={{
//                   required: "Email is required",
//                   pattern: {
//                     value: /\S+@\S+\.\S+/,
//                     message: "Please enter a valid email address",
//                   },
//                 }}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email Address</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter your email" {...field} />
//                     </FormControl>
//                     <FormDescription>
//                       We&apos;ll send your booking confirmation to this email
//                       address.
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <Button
//                 type="submit"
//                 className="w-full bg-[#18181b]"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Booking"}
//               </Button>
//             </form>
//           </Form>
//         </CardContent>
//       </Card>

//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-2xl">Booking Details</CardTitle>
//           <CardDescription>
//             Review your booking information before submitting.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           {bookingDetails ? (
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-semibold">Dates</h3>
//                 <p>
//                   {format(new Date(bookingDetails.startDate), "MMM dd, yyyy")} -{" "}
//                   {format(new Date(bookingDetails.endDate), "MMM dd, yyyy")}
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-semibold">Guests</h3>
//                 <p>
//                   {bookingDetails.NoofAdult} Adults,{" "}
//                   {bookingDetails.NoofChildren} Children
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-semibold">Room Type</h3>
//                 <p>{id}</p>
//               </div>
//             </div>
//           ) : (
//             <p>No booking details available.</p>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { format } from "date-fns";
import AnimatedMenu from "@/app/components/AnimatedMenu";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      useremail: "",
    },
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem("Hotelbookingdetail");
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      setBookingDetails(parsedData);
    }
  }, []);

  async function onSubmit(data) {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, ...bookingDetails, decodedId }),
      });

      if (!response.ok) throw new Error("Failed to send booking");

      toast({
        title: "Booking Submitted!",
        description: "We'll send you a confirmation email shortly.",
      });
      form.reset();
      localStorage.removeItem("Hotelbookingdetail");
      router.push("/booking");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="py-20 px-4 flex flex-col md:flex-row justify-center items-start gap-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Guest Details</CardTitle>
          <CardDescription>
            Please fill in your information to book your stay.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mobile"
                rules={{
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10,}$/,
                    message: "Please enter a valid mobile number",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your mobile number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="useremail"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email address",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormDescription>
                      We&apos;ll send your booking confirmation to this email
                      address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-[#18181b]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Booking"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Booking Details</CardTitle>
          <CardDescription>
            Review your booking information before submitting.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {bookingDetails ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Dates</h3>
                <p>
                  {format(new Date(bookingDetails.StartDate), "MMM dd, yyyy")} -{" "}
                  {format(new Date(bookingDetails.EndDate), "MMM dd, yyyy")}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Guests</h3>
                <p>
                  {bookingDetails.NoofAdult} Adults,{" "}
                  {bookingDetails.NoofChildren} Children
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Room Type</h3>
                <p>{decodedId}</p>
              </div>
            </div>
          ) : (
            <p>No booking details available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
