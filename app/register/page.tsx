"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, CreditCard, FileCheck } from "lucide-react";
import Link from "next/link";
import { HeaderRegister } from "@/components/HeaderRegister";
import { Step1PersonalData } from "@/components/register/Step1PersonalData";
import { Step2Address } from "@/components/register/Step2Address";
import { Step3Payment } from "@/components/register/Step3Payment";
import { Step4Confirm } from "@/components/register/Step4Confirm";
import { Step5Success } from "@/components/register/Step5Success";
import type {
    PersonalDataFormData,
    AddressFormData,
    PaymentFormData,
} from "@/lib/schemas/register";

export default function RegisterPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<{
        personalData?: PersonalDataFormData;
        address?: AddressFormData;
        payment?: PaymentFormData;
    }>({});

    const steps = [
        { id: 1, label: "Dados", icon: User },
        { id: 2, label: "Pagamento", icon: CreditCard },
        { id: 3, label: "Confirmar", icon: FileCheck },
    ];

    const handlePersonalDataNext = (data: PersonalDataFormData) => {
        setFormData((prev) => ({ ...prev, personalData: data }));
        setCurrentStep(2);
    };

    const handleAddressNext = (data: AddressFormData) => {
        setFormData((prev) => ({ ...prev, address: data }));
        setCurrentStep(3);
    };

    const handlePaymentNext = (data: PaymentFormData) => {
        setFormData((prev) => ({ ...prev, payment: data }));
        setCurrentStep(4);
    };

    const handleConfirmNext = () => {
        setCurrentStep(5);
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const getStepComponent = () => {
        switch (currentStep) {
            case 1:
                return <Step1PersonalData onNext={handlePersonalDataNext} />;
            case 2:
                return (
                    <Step2Address
                        onNext={handleAddressNext}
                        onBack={handleBack}
                    />
                );
            case 3:
                return (
                    <Step3Payment
                        onNext={handlePaymentNext}
                        onBack={handleBack}
                    />
                );
            case 4:
                return (
                    <Step4Confirm
                        onNext={handleConfirmNext}
                        onBack={handleBack}
                        formData={formData}
                    />
                );
            case 5:
                return <Step5Success />;
            default:
                return <Step1PersonalData onNext={handlePersonalDataNext} />;
        }
    };

    const getActiveStepIndex = () => {
        if (currentStep <= 2) return 0; // Dados
        if (currentStep === 3) return 1; // Pagamento
        if (currentStep >= 4) return 2; // Confirmar
        return 0;
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#FFE1BE]">
            {/* Header */}
            <HeaderRegister />

            {/* Background decorative shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#FFE1BE] opacity-30 blur-3xl"></div>
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#FFE1BE] opacity-30 blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-1 flex-col py-8 px-4">
                {/* Cancel Button - Escanteado à esquerda */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#FF355A] hover:text-[#732C03] transition-colors"
                    >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF355A]">
                            <X className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium">Cancelar</span>
                    </Link>
                </div>

                {/* Main Content */}
                <div className="mx-auto flex flex-1 flex-col max-w-4xl w-full">
                    {/* Progress Bar - Alinhado com o formulário */}
                    <div className="mb-8 flex items-center justify-center bg-[#FFF4E6] rounded-lg p-4 w-full">
                        <div className="flex items-center gap-4">
                            {steps.map((step, index) => {
                                const isActive = index <= getActiveStepIndex();
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={step.id}
                                        className="flex items-center"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors ${
                                                    isActive
                                                        ? "border-[#FF355A] bg-[#FF355A] text-white"
                                                        : "border-gray-300 bg-white text-gray-400"
                                                }`}
                                            >
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <span
                                                className={`mt-2 text-sm font-medium ${
                                                    isActive
                                                        ? "text-[#FF355A]"
                                                        : "text-gray-400"
                                                }`}
                                            >
                                                {step.label}
                                            </span>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div
                                                className={`mx-4 h-1 w-16 transition-colors ${
                                                    index < getActiveStepIndex()
                                                        ? "bg-[#FF355A]"
                                                        : "bg-gray-300"
                                                }`}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-1"
                        >
                            {getStepComponent()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
