"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters / Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Invalid email address / Adresse email invalide"),
  phone: z.string().min(10, "Phone number must be at least 10 digits / Le numéro de téléphone doit contenir au moins 10 chiffres"),
  preferredDate: z.string().min(1, "Please select a preferred date / Veuillez sélectionner une date"),
  preferredTime: z.string().min(1, "Please select a preferred time / Veuillez sélectionner une heure"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/slack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "booking",
          ...data,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your test drive booking has been submitted. We'll contact you soon. / Merci ! Votre réservation d'essai a été soumise. Nous vous contacterons bientôt.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit booking. Please try again. / Échec de la soumission. Veuillez réessayer.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later. / Une erreur s'est produite. Veuillez réessayer plus tard.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto space-y-6"
      id="book-test-drive"
    >
      <div>
        <label htmlFor="booking-name" className="block text-sm font-medium text-gray-dark mb-2">
          Name / Nom *
        </label>
        <input
          type="text"
          id="booking-name"
          {...register("name")}
          className="w-full px-4 py-3 border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          placeholder="Your name / Votre nom"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="booking-email" className="block text-sm font-medium text-gray-dark mb-2">
          Email *
        </label>
        <input
          type="email"
          id="booking-email"
          {...register("email")}
          className="w-full px-4 py-3 border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-dark mb-2">
          Phone / Téléphone *
        </label>
        <input
          type="tel"
          id="booking-phone"
          {...register("phone")}
          className="w-full px-4 py-3 border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          placeholder="+1 234 567 8900"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferred-date" className="block text-sm font-medium text-gray-dark mb-2">
            Preferred Date / Date préférée *
          </label>
          <input
            type="date"
            id="preferred-date"
            {...register("preferredDate")}
            min={minDate}
            className="w-full px-4 py-3 border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          {errors.preferredDate && (
            <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-dark mb-2">
            Preferred Time / Heure préférée *
          </label>
          <select
            id="preferred-time"
            {...register("preferredTime")}
            className="w-full px-4 py-3 border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          >
            <option value="">Select time / Sélectionner l'heure</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
          </select>
          {errors.preferredTime && (
            <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="booking-message" className="block text-sm font-medium text-gray-dark mb-2">
          Additional Message (Optional) / Message supplémentaire (Optionnel)
        </label>
        <textarea
          id="booking-message"
          {...register("message")}
          rows={4}
          className="w-full px-4 py-3 border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
          placeholder="Any special requests or questions... / Des demandes spéciales ou des questions..."
        />
      </div>

      {submitStatus.type && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary text-white hover:bg-primary-dark transition-colors rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting... / Envoi..." : "Book Test Drive / Réserver un essai"}
      </button>
    </motion.form>
  );
}
