"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { FormData, StatusModalType } from "@t";

import Link from "next/link";
import { Logo, Button, InputField, CheckboxField, TextareaField, ResponsiveImage, StatusModal } from "@components";

export const ContactUsSection = () => {
    const [statusModal, setStatusModal] = useState<StatusModalType | null>(null);

    const { t } = useTranslation("contact-us");
    const successModal = {
        title: t("successModal.title"),
        text: t("successModal.text"),
    };
    const errorModal = {
        title: t("errorModal.title"),
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (result.success) {
                setStatusModal(successModal);
                reset();
            } else {
                console.error("Server error:", result.error);
                setStatusModal(errorModal);
            }
        } catch (error) {
            console.error("Sending error:", error);
            setStatusModal(errorModal);
        }
    };

    useEffect(() => {
        if (statusModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [statusModal]);

    return (
        <section className="mt-[-19px] xl:mt-[-1px] tb:mt-[-5px] sm:mt-0">
            <div className="container">
                <Link href="/" className="block max-w-[185px] mb-10 xl:mb-[60px] xl:max-w-[160px] tb:max-w-[175px] sm:max-w-[154px] sm:mb-[40px]">
                    <Logo type="black" />
                </Link>
                <div className="flex justify-between gap-[40px] relative tb:flex-col sm:gap-[36px]">
                    <div className="flex-1 max-w-[416px] xl:max-w-[414px] tb:max-w-[unset]">
                        <h1 className="subheading mb-[31px] sm:mb-[30px]">
                            <span className="text-t-orange">[9]</span> {t("hero.title")}
                        </h1>
                        <p
                            className="mb-[27px] max-w-[365px] xl:mb-[40px] xl:max-w-[286px] tb:mb-0 sm:max-w-[277px]"
                            dangerouslySetInnerHTML={{ __html: t("hero.text") }}
                        />
                        <ResponsiveImage
                            className={clsx(
                                "ml-[-46%] mb-[-64px] xl:rotate-[-6deg] xl:ml-[-37%] lg:mb-[-48px] md:mb-0",
                                "tb:absolute tb:top-0 tb:right-0 tb:m-0 tb:w-[371px] tb:translate-x-[19.3%] tb:translate-y-[-32.7%] tb:rotate-[-3deg] tb:scale-x-[-1]",
                                "sm:hidden"
                            )}
                            src="contact-us/paw.png"
                            alt="Paw"
                            aspectRatio={607 / 502}
                            sizes="30vw"
                        />
                    </div>
                    <div className="flex-1 max-w-[941px] xl:max-w-[837px] tb:max-w-[unset]">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px]">
                            <InputField
                                label={t("hero.form.name.label")}
                                placeholder={t("hero.form.name.placeholder")}
                                error={errors.name}
                                {...register("name", {
                                    required: t("hero.form.name.required"),
                                    validate: (value) => value.trim().length >= 2 || t("hero.form.name.error"),
                                })}
                            />
                            <InputField
                                label={t("hero.form.email.label")}
                                placeholder={t("hero.form.email.placeholder")}
                                type="email"
                                error={errors.email}
                                {...register("email", {
                                    required: t("hero.form.email.required"),
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                        message: t("hero.form.email.error"),
                                    },
                                })}
                            />
                            <TextareaField
                                className="mt-[-2px] sm:mt-[-1px]"
                                label={t("hero.form.message.label")}
                                placeholder={t("hero.form.message.placeholder")}
                                error={errors.message}
                                {...register("message", {
                                    required: t("hero.form.message.required"),
                                    validate: (value) => value.trim().length >= 2 || t("hero.form.message.error"),
                                })}
                            />
                            <CheckboxField
                                className="mt-[-3px]"
                                label={t("hero.form.policy.label")}
                                error={errors.consent}
                                {...register("consent", { required: t("hero.form.policy.required") })}
                            />
                            <Button className="mt-[20px] tb:w-full" type="submit" isLoading={isSubmitting}>
                                {isSubmitting ? t("hero.form.buttonTextSending") : t("hero.form.buttonText")}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            {statusModal && <StatusModal modal={statusModal} setModal={setStatusModal} />}
        </section>
    );
};
