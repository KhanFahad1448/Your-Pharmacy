import malariaImg from "../Images/malaria.jpg";
import dehydrationImg from "../Images/dehydration.jpg";
import bodypain from "../Images/bodypain.jpg";
import jointSwelling from "../Images/jointSwelling.jpg";
import fever from "../Images/fever.jpg";
import allergy from "../Images/allergy.jpg";
import headache from "../Images/headache.jpg";
import digestion from "../Images/digestion.jpg";
import muscleCramp from "../Images/muscleCramp.jpg";

const healthBlogs = [
  {
    id: 1,
    title: "Dealing with Malaria: Symptoms & Remedies",
    image: malariaImg,
    description:
      "Malaria is a mosquito-borne disease causing fever, chills, and fatigue. It requires prompt diagnosis and treatment.",
    advice:
      "Consult a doctor immediately if you have persistent fever and chills. Take prescribed antimalarial medication only.",
    tip: "Use mosquito nets and repellents. Avoid stagnant water near your home.",
  },
  {
    id: 2,
    title: "How to Manage Dehydration Effectively",
    image: dehydrationImg,
    description:
      "Dehydration occurs when your body loses more fluids than it takes in. Common causes include heat, exercise, or illness.",
    advice:
      "Drink oral rehydration solutions if symptoms are mild. In severe cases, seek medical attention immediately.",
    tip: "Keep a water bottle with you at all times and increase fluid intake during summer.",
  },
  {
    id: 3,
    title: "Dealing with Body Pain Naturally",
    image: bodypain,
    description:
      "Body pain can result from stress, fatigue, or underlying medical issues. Identifying the cause is key.",
    advice:
      "Stretch regularly and get enough rest. If pain persists for more than a week, visit your physician.",
    tip: "Include magnesium-rich foods like bananas and nuts in your diet.",
  },
  {
    id: 4,
    title: "Managing Joint Swelling and Inflammation",
    image: jointSwelling,
    description:
      "Joint swelling may be due to arthritis or injury. It causes stiffness and discomfort.",
    advice:
      "Apply ice packs and elevate the affected limb. Avoid overexertion until pain subsides.",
    tip: "Maintain a healthy weight and stay active to keep joints flexible.",
  },
  {
    id: 5,
    title: "Fever: When to Worry and When Not To",
    image: fever,
    description:
      "Fever is a natural defense mechanism. However, high or persistent fever requires medical evaluation.",
    advice:
      "Take paracetamol for fever relief and stay hydrated. Visit a doctor if it lasts more than 3 days.",
    tip: "Monitor your temperature regularly and avoid self-medication with antibiotics.",
  },
  {
    id: 6,
    title: "Tips to Handle Seasonal Allergies",
    image: allergy,
    description:
      "Allergies can cause sneezing, itching, and watery eyes. They are common during weather transitions.",
    advice:
      "Use prescribed antihistamines. Keep windows closed during high pollen days.",
    tip: "Wash your face after coming indoors to remove allergens.",
  },
  {
    id: 7,
    title: "Coping with Headaches the Healthy Way",
    image: headache,
    description:
      "Headaches can be triggered by stress, dehydration, or lack of sleep. Identifying the trigger helps.",
    advice:
      "Practice relaxation techniques like deep breathing. Avoid caffeine and screen strain.",
    tip: "Maintain a consistent sleep schedule to reduce migraine frequency.",
  },
  {
    id: 8,
    title: "Improving Digestion and Gut Health",
    image: digestion,
    description:
      "Poor digestion can cause bloating and discomfort. Diet plays a key role in maintaining gut balance.",
    advice:
      "Eat fiber-rich foods and probiotics like yogurt. Avoid processed food and late-night eating.",
    tip: "Drink warm water after meals to aid digestion.",
  },
  {
    id: 9,
    title: "Dealing with Muscle Cramps",
    image: muscleCramp,
    description:
      "Muscle cramps often occur due to dehydration or overexertion during exercise.",
    advice:
      "Gently stretch the affected muscle and apply heat. Increase your potassium intake.",
    tip: "Stay hydrated and do light stretches before workouts.",
  }
];

export default healthBlogs;
