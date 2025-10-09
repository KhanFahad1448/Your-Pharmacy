import paracetamol from "..//Images/paracetamol.jpg"; 
import amoxicillin from "..//Images/amoxicillin.jpg";
import azithromycin from "..//Images/azithromycin.jpg";
import cetrizine from "..//Images/cetrizine.jpg";
import dolo from "..//Images/dolo.jpg";
import pantoprazole from "..//Images/pantoprazole.jpg";
import metformin from "..//Images/metformin.jpg";
import atorvastatin from "..//Images/atorvastatin.jpg";
import amlodipine from "..//Images/amlodipine.jpg";
import montelukast from "..//Images/montelukast.jpg";
import cetirizinesyrup from "..//Images/cetirizineSyrup.jpg";
import diclofenacgel from "..//Images/diclofenacGel.jpg";
import ors from "..//Images/orsHydration.jpg";
import vitaminC from "..//Images/vitaminC.jpg";
import ironFolic from "..//Images/ironFolicAcid.jpg";
import insulin from "..//Images/insulinInjection.jpg";
import coughSyrup from "..//Images/coughSyrup.jpg";
import calciumVitaminD3 from "..//Images/calcium+Vitamin.jpg";
import omeprazole from "..//Images/omeprazole.jpg";
import levocetirizine from "..//Images/levocetirizine.jpg";


const medicine = [
  {
    id: 1,
    name: "Paracetamol 500mg Tablet",
    price: 25,
    expiryDate: "2026-03-15",
    category: "Pain Relief",
    images: paracetamol
  },
  {
    id: 2,
    name: "Amoxicillin 250mg Capsule",
    price: 80,
    expiryDate: "2025-12-10",
    category: "Antibiotic",
    images: amoxicillin
  },
  {
    id: 3,
    name: "Azithromycin 500mg Tablet",
    price: 120,
    expiryDate: "2026-07-20",
    category: "Antibiotic",
    images: azithromycin
  },
  {
    id: 4,
    name: "Cetrizine 10mg Tablet",
    price: 18,
    expiryDate: "2027-01-05",
    category: "Allergy",
    images: cetrizine
  },
  {
    id: 5,
    name: "Dolo 650mg Tablet",
    price: 30,
    expiryDate: "2026-05-30",
    category: "Pain Relief",
    images: dolo
  },
  {
    id: 6,
    name: "Pantoprazole 40mg Tablet",
    price: 90,
    expiryDate: "2026-09-22",
    category: "Acidity",
    images: pantoprazole
  },
  {
    id: 7,
    name: "Metformin 500mg Tablet",
    price: 65,
    expiryDate: "2025-11-12",
    category: "Diabetes",
    images: metformin
  },
  {
    id: 8,
    name: "Atorvastatin 10mg Tablet",
    price: 110,
    expiryDate: "2026-02-28",
    category: "Cholesterol",
    images: atorvastatin
  },
  {
    id: 9,
    name: "Amlodipine 5mg Tablet",
    price: 45,
    expiryDate: "2027-04-18",
    category: "Blood Pressure",
    images: amlodipine
  },
  {
    id: 10,
    name: "Montelukast 10mg Tablet",
    price: 95,
    expiryDate: "2026-06-30",
    category: "Allergy",
    images: montelukast
  },
  {
    id: 11,
    name: "Cetirizine Syrup 60ml",
    price: 55,
    expiryDate: "2026-09-10",
    category: "Allergy",
    images: cetirizinesyrup
  },
  {
    id: 12,
    name: "Diclofenac Gel 30g",
    price: 75,
    expiryDate: "2027-02-15",
    category: "Pain Relief",
    images: diclofenacgel
  },
  {
    id: 13,
    name: "ORS Hydration Powder",
    price: 20,
    expiryDate: "2025-08-05",
    category: "Hydration",
    images: ors
  },
  {
    id: 14,
    name: "Vitamin C 500mg Tablet",
    price: 150,
    expiryDate: "2027-07-12",
    category: "Supplements",
    images: vitaminC
  },
  {
    id: 15,
    name: "Iron Folic Acid Tablet",
    price: 90,
    expiryDate: "2026-11-20",
    category: "Supplements",
    images: ironFolic
  },
  {
    id: 16,
    name: "Insulin Injection 10ml",
    price: 280,
    expiryDate: "2025-12-15",
    category: "Diabetes",
    images: insulin
  },
  {
    id: 17,
    name: "Cough Syrup 100ml",
    price: 95,
    expiryDate: "2026-04-09",
    category: "Cold & Cough",
    images: coughSyrup
  },
  {
    id: 18,
    name: "Calcium + Vitamin D3 Tablet",
    price: 160,
    expiryDate: "2027-03-20",
    category: "Supplements",
    images: calciumVitaminD3
  },
  {
    id: 19,
    name: "Omeprazole 20mg Capsule",
    price: 85,
    expiryDate: "2026-12-30",
    category: "Acidity",
    images: omeprazole
  },
  {
    id: 20,
    name: "Levocetirizine 5mg Tablet",
    price: 25,
    expiryDate: "2027-01-01",
    category: "Allergy",
    images: levocetirizine
  },
  {
    id: 21,
    name: "Aspirin 75mg Tablet",
    price: 50,
    discount: 5,
    stock: true,
    rating: 4.6,
    category: "Pain Relief",
    expiryDate: "2026-12-01",
    images: "https://via.placeholder.com/200x150?text=Aspirin"
  },
  {
    id: 22,
    name: "Glucosamine Chondroitin Capsules",
    price: 400,
    discount: 15,
    stock: true,
    rating: 4.7,
    category: "Supplements",
    expiryDate: "2027-01-15",
    images: "https://via.placeholder.com/200x150?text=Glucosamine"
  },
  {
    id: 23,
    name: "Glibenclamide 5mg Tablet",
    price: 70,
    discount: 0,
    stock: true,
    rating: 4.5,
    category: "Diabetic Care",
    expiryDate: "2026-03-20",
    images: "https://via.placeholder.com/200x150?text=Glibenclamide"
  },
  {
    id: 24,
    name: "Moisturizing Cream 50g",
    price: 180,
    discount: 10,
    stock: true,
    rating: 4.6,
    category: "Skin Care",
    expiryDate: "2026-09-10",
    images: "https://via.placeholder.com/200x150?text=Moisturizing+Cream"
  },
  {
    id: 25,
    name: "Vitamin D3 1000 IU Capsule",
    price: 200,
    discount: 10,
    stock: true,
    rating: 4.8,
    category: "Vitamins",
    expiryDate: "2027-05-01",
    images: "https://via.placeholder.com/200x150?text=Vitamin+D3"
  },
  {
    id: 26,
    name: "Cold & Flu Relief Tablet",
    price: 60,
    discount: 5,
    stock: true,
    rating: 4.5,
    category: "Cold & Flu",
    expiryDate: "2026-08-15",
    images: "https://via.placeholder.com/200x150?text=Cold+Flu+Relief"
  },
  {
    id: 27,
    name: "Atorvastatin 10mg Tablet",
    price: 120,
    discount: 0,
    stock: true,
    rating: 4.7,
    category: "Heart Care",
    expiryDate: "2026-11-10",
    images: "https://via.placeholder.com/200x150?text=Atorvastatin"
  },
  {
    id: 28,
    name: "Probiotic Capsules",
    price: 350,
    discount: 20,
    stock: true,
    rating: 4.6,
    category: "Digestive Care",
    expiryDate: "2027-02-28",
    images: "https://via.placeholder.com/200x150?text=Probiotic"
  },
  {
    id: 29,
    name: "Naproxen 250mg Tablet",
    price: 55,
    discount: 5,
    stock: true,
    rating: 4.5,
    category: "Pain Relief",
    expiryDate: "2026-05-15",
    images: "https://via.placeholder.com/200x150?text=Naproxen"
  },
  {
    id: 30,
    name: "Biotin 5000mcg Tablet",
    price: 220,
    discount: 10,
    stock: true,
    rating: 4.6,
    category: "Vitamins",
    expiryDate: "2026-12-31",
    images: "https://via.placeholder.com/200x150?text=Biotin"
  },
  {
    id: 31,
    name: "Magnesium + Calcium Tablets",
    price: 300,
    discount: 15,
    stock: true,
    rating: 4.7,
    category: "Supplements",
    expiryDate: "2027-03-10",
    images: "https://via.placeholder.com/200x150?text=Magnesium+Calcium"
  },
  {
    id: 32,
    name: "Salbutamol Inhaler",
    price: 450,
    discount: 5,
    stock: true,
    rating: 4.8,
    category: "Respiratory Care",
    expiryDate: "2026-06-20",
    images: "https://via.placeholder.com/200x150?text=Salbutamol+Inhaler"
  },
  {
    id: 33,
    name: "Hydration Oral Solution",
    price: 80,
    discount: 0,
    stock: true,
    rating: 4.5,
    category: "Digestive Care",
    expiryDate: "2026-09-30",
    images: "https://via.placeholder.com/200x150?text=Oral+Solution"
  },
  {
    id: 34,
    name: "Hand Sanitizer 200ml",
    price: 150,
    discount: 10,
    stock: true,
    rating: 4.6,
    category: "Skin Care",
    expiryDate: "2027-01-15",
    images: "https://via.placeholder.com/200x150?text=Hand+Sanitizer"
  },
  {
    id: 35,
    name: "Levocetirizine 5mg Tablet",
    price: 40,
    discount: 0,
    stock: true,
    rating: 4.4,
    category: "Allergy",
    expiryDate: "2026-07-05",
    images: "https://via.placeholder.com/200x150?text=Levocetirizine"
  },
  {
    id: 36,
    name: "Cefixime 200mg Capsule",
    price: 180,
    discount: 5,
    stock: true,
    rating: 4.6,
    category: "Antibiotics",
    expiryDate: "2026-10-25",
    images: "https://via.placeholder.com/200x150?text=Cefixime"
  },
  {
    id: 37,
    name: "Multivitamin Syrup 100ml",
    price: 250,
    discount: 15,
    stock: true,
    rating: 4.5,
    category: "Vitamins",
    expiryDate: "2027-04-01",
    images: "https://via.placeholder.com/200x150?text=Multivitamin+Syrup"
  },
  {
    id: 38,
    name: "Anti-Fungal Cream 20g",
    price: 160,
    discount: 10,
    stock: true,
    rating: 4.7,
    category: "Skin Care",
    expiryDate: "2026-11-30",
    images: "https://via.placeholder.com/200x150?text=Anti-Fungal+Cream"
  },
  {
    id: 39,
    name: "Glimepiride 2mg Tablet",
    price: 75,
    discount: 5,
    stock: true,
    rating: 4.5,
    category: "Diabetic Care",
    expiryDate: "2026-08-20",
    images: "https://via.placeholder.com/200x150?text=Glimepiride"
  },
  {
    id: 40,
    name: "Vitamin B Complex Capsule",
    price: 200,
    discount: 10,
    stock: true,
    rating: 4.6,
    category: "Vitamins",
    expiryDate: "2027-02-10",
    images: "https://via.placeholder.com/200x150?text=Vitamin+B+Complex"
  }
];

export default medicine;
