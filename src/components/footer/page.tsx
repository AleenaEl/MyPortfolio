"use client"
import { FC, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Input2 } from "../ui/input2";
import { cn } from "../../../lib/utils";
// import { cn } from "@/lib/utils";
interface FormInputs {
    user_name: string;
    user_email: string;
    message: string;
}
const Footer: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormInputs>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                "#contact-form",
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setSubmitMessage("Message sent successfully!");
            reset();
        } catch (error: any) {
            setSubmitMessage("Failed to send message. Please try again.");
            console.error("EmailJS error:", error.text);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitMessage(null), 5000); // Hide message after 5 seconds
        }
    };
    return (
        <div className=" text-white w-full flex flex-col justify-start  gap-y-8 mt-12 md:mt-5 h-full">
            <div className="flex flex-col gap-y-3 w-full md:w-[60%] md:pl-32 ">
                <h2 className="hidden md:block font-extralight text-4xl ">
                    Let’s work together on your next project
                </h2>
                <h2 className="block md:hidden text-right font-extralight text-4xl pe-5">
                    Let’s Connect
                </h2>
                <p className="hidden md:block text-xs md:text-sm text-neutral-700 w-[70%]">
                    Reach out to collaborate on your next project—I'm excited to bring your ideas to life with my expertise in web development. Let's connect and create something amazing together!
                </p>
                <p className="block md:hidden text-xs text-right text-neutral-700 w-full ps-14 pe-5">
                    Reach out to collaborate on your next project—I'm excited to bring your ideas to life with my expertise in web development. Let's connect and create something amazing together!
                </p>
            </div>
            <div className="bg-[#181818] py-10 px-5  md:pl-32 w-full md:pr-12 h-full ">
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-[30%_auto] gap-x-5 mb-5">

                    <div className="flex flex-col gap-y-8 mb-8 md:mb-0">
                        <div>
                            <LabelInputContainer>

                            <Input2
                                type="text"
                                placeholder="Name"
                                className="bg-[#282828] border-none text-sm text-white"
                                {...register("user_name", { required: "Name is required" })}
                            />
                            </LabelInputContainer>
                            {errors.user_name && (
                                <p className="text-red-500 text-xs mt-1">{errors.user_name.message}</p>
                            )}
                        </div>
                        <div>
                            <LabelInputContainer>

                            <Input2
                                type="email"
                                placeholder="Email"
                                className="bg-[#282828] border-none text-sm text-white"
                                {...register("user_email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            </LabelInputContainer>
                            {errors.user_email && (
                                <p className="text-red-500 text-xs mt-1">{errors.user_email.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="h-full ">
                        <LabelInputContainer>

                        <Textarea
                            placeholder="Type your message here."
                            className="bg-[#282828] border-none text-sm h-full text-white"
                            {...register("message", { required: "Message is required" })}
                        />
                        </LabelInputContainer>
                        {errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                        )}
                    </div>
                </form>
                <div className="flex justify-end w-full ">
                    <Button type="submit"
                        form="contact-form" className='h-10  px-10 text-black bg-[#CFCFCF] flex items-center text-sm hover:bg-[#CFCFCF] ' disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Connect"}
                    </Button>
                </div>
                {submitMessage && (
                    <p
                        className={`text-sm mt-4 text-center ${submitMessage.includes("success") ? "text-green-500" : "text-red-500"
                            }`}
                    >
                        {submitMessage}
                    </p>
                )}
            </div>
            <div className="flex w-full justify-center  items-center mb-5 text-sm font-extralight ">
                <div>

                    <p> © All rights reserved by Aleena Eldhose</p>
                </div>




            </div>
        </div>
    )
}
export default Footer
const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
  };