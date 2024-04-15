import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const TherapistForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    ageGroup: '',
    country: '',
    language: '',
    occupation: '',
    receivedTherapyBefore: '',
    takingMedication: '',
    diagnosedDisorders: [],
    reasonForTherapy: '',
    durationOfConcerns: '',
    specificSymptoms: [],
    therapyGoals: [],
    agreedToTerms: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    const isChecked = e.target.checked;
    let updatedArray = [...formData[name]];

    if (isChecked) {
      updatedArray.push(value);
    } else {
      updatedArray = updatedArray.filter(item => item !== value);
    }

    setFormData({
      ...formData,
      [name]: updatedArray
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);

    emailjs
      .sendForm('service_sxkvb65', 'template_embbxii', form.current, {
        publicKey: 'IBc8vS--T4kFu2wo2',
      })
      .then(
        () => {
          setLoading(false);
          setSent(true);
          console.log('SUCCESS!');
          alert('Form Submitted!!, Someone Will be with you Shortly.');
          setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            gender: '',
            ageGroup: '',
            country: '',
            language: '',
            occupation: '',
            receivedTherapyBefore: '',
            takingMedication: '',
            diagnosedDisorders: [],
            reasonForTherapy: '',
            durationOfConcerns: '',
            specificSymptoms: [],
            therapyGoals: [],
            agreedToTerms: false
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Oops... ' + JSON.stringify(error));
        },
      );
  };

  return (
    <form className="my-4 mx-4 mb-4" id='therapist-form' ref={form} onSubmit={handleSubmit}>
      {/* Name */}
      <div className="mb-6">
        <label className="block text-lg font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          className="shadow appearance-none border text-gray-950 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-yellow-100"
          id="name" type="text" placeholder="Name"
          name="name" value={formData.name} onChange={handleChange} />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-lg font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="shadow appearance-none border text-gray-950 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-yellow-100"
          id="email" type="email" placeholder="Email"
          name="email" value={formData.email} onChange={handleChange} />
      </div>

      {/* Phone Number */}
      <div className="mb-6">
        <label className="block text-lg font-bold mb-2" htmlFor="phoneNumber">
          Phone Number:
        </label>
        <input
          className="shadow appearance-none border text-gray-950 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-yellow-100"
          id="phoneNumber" type="text" placeholder="Phone Number"
          name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="block text-lg font-bold mb-2">
          Gender:
        </label>
        <div className="flex items-center">
          <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} />
          <label htmlFor="male" className=" mr-2">Male</label>
          <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} />
          <label htmlFor="female" className=" mr-2">Female</label>
          <input type="radio" id="non-binary" name="gender" value="Non-binary/Third gender" onChange={handleChange} />
          <label htmlFor="non-binary" className=" mr-2">Non-binary/Third gender</label>
          <input type="radio" id="prefer-not-to-say" name="gender" value="Prefer not to say" onChange={handleChange} />
          <label htmlFor="prefer-not-to-say" className=" mr-2">Prefer not to say</label>
        </div>
      </div>

     {/* Age Group */}
     <div className="mb-6">
        <label className="block  text-lg font-bold mb-2" htmlFor="ageGroup">
          Age Group:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline bg-yellow-100"
          id="ageGroup" type="text" placeholder="Age Group"
          name="ageGroup" value={formData.ageGroup} onChange={handleChange} />
      </div>

      {/* Country */}
      <div className="mb-6">
        <label className="block  text-lg font-bold mb-2" htmlFor="country">
          Country of Residence:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline bg-yellow-100"
          id="country" type="text" placeholder="Country of Residence"
          name="country" value={formData.country} onChange={handleChange} />
      </div>

      {/* Duration of Concerns */}
      <div className="mb-6">
        <label className="block text-lg font-bold mb-2" htmlFor="durationOfConcerns">
          How long have you been experiencing these concerns?
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none text-gray-950 focus:shadow-outline bg-yellow-100"
          id="durationOfConcerns" name="durationOfConcerns" value={formData.durationOfConcerns} onChange={handleChange}>
          <option value="A few days/weeks">A few days/weeks</option>
          <option value="A few months">A few months</option>
          <option value="Nearly a year">Nearly a year</option>
          <option value="More than a year">More than a year</option>
          {/* Add more options if needed */}
        </select>
      </div>
      {/* Language */}
      <div className="mb-6">
        <label className="block text-lg font-bold mb-2">
          Language you speak:
        </label>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4">
            <input type="checkbox" id="english" name="language" value="English" onChange={handleCheckboxChange} />
            <label htmlFor="english" className=" mr-2 ">English</label>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4">
            <input type="checkbox" id="hindi" name="language" value="Hindi" onChange={handleCheckboxChange} />
            <label htmlFor="hindi" className=" mr-2">Hindi</label>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4">
            <input type="checkbox" id="punjabi" name="language" value="Punjabi" onChange={handleCheckboxChange} />
            <label htmlFor="punjabi" className=" mr-2">Punjabi</label>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4">
            <input type="checkbox" id="marathi" name="language" value="Marathi" onChange={handleCheckboxChange} />
            <label htmlFor="marathi" className=" mr-2">Marathi</label>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4">
            <input type="checkbox" id="bengali" name="language" value="Bengali" onChange={handleCheckboxChange} />
            <label htmlFor="bengali" className=" mr-2">Bengali</label>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4">
            <input type="checkbox" id="gujarati" name="language" value="Gujarati" onChange={handleCheckboxChange} />
            <label htmlFor="gujarati" className=" mr-2">Gujarati</label>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4">
            <input type="checkbox" id="other" name="language" value="Other" onChange={handleCheckboxChange} />
            <label htmlFor="other" className=" mr-2">Other</label>
          </div>
        </div>
      </div>

      {/* Occupation */}
      <div className="mb-6">
            <label className="block text-lg font-bold mb-2">
              Your occupation:
            </label>
            <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
              <input type="radio" id="student" name="occupation" value="Student" onChange={handleChange} />
              <label htmlFor="student" className="mr-2">Student</label>
            </div>
            <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
              <input type="radio" id="employed" name="occupation" value="Employed" onChange={handleChange} />
              <label htmlFor="employed" className="mr-2">Employed</label>
            </div>
            <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
              <input type="radio" id="unemployed" name="occupation" value="Un-employed" onChange={handleChange} />
              <label htmlFor="unemployed" className="mr-2">Un-employed</label>
            </div>
            <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
              <input type="radio" id="business-owner" name="occupation" value="Business Owner" onChange={handleChange} />
              <label htmlFor="business-owner" className="mr-2">Business Owner</label>
            </div>
            <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
              <input type="radio" id="homemaker" name="occupation" value="Homemaker" onChange={handleChange} />
              <label htmlFor="homemaker" className="mr-2">Homemaker</label>
            </div>
            {/* Add more occupation options if needed */}
          </div>
      {/* Received Therapy Before */}
      <div className="mb-6">
        <label className="block text-lg font-bold mb-2">
          Have you received therapy or counselling before?
        </label>
        <div className="flex items-center ">
          <input type="radio" id="received-therapy-yes" name="receivedTherapyBefore" value="Yes" onChange={handleChange} />
          <label htmlFor="received-therapy-yes" className="mr-2">Yes</label>
          <input type="radio" id="received-therapy-no" name="receivedTherapyBefore" value="No" onChange={handleChange} />
          <label htmlFor="received-therapy-no" className="mr-2">No</label>
        </div>
      </div>

      {/* Taking Medication */}
      <div className="mb-6">
        <label className="block text-lg font-bold mb-2">
          Are you currently taking any medication for mental health concerns?
        </label>
        <div className="flex items-center ">
          <input type="radio" id="taking-medication-yes" name="takingMedication" value="Yes" onChange={handleChange} />
          <label htmlFor="taking-medication-yes" className="mr-2">Yes</label>
          <input type="radio" id="taking-medication-no" name="takingMedication" value="No" onChange={handleChange} />
          <label htmlFor="taking-medication-no" className="mr-2">No</label>
        </div>
      </div>

      {/* Diagnosed Mental Health Disorders */}
      <div className="mb-6">
        <label className="block text-lg font-bold mb-2">
          Have you been diagnosed with any mental health disorders? (Select all that apply)
        </label>
        <div className="flex flex-wrap ">
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
            <input type="checkbox" id="anxiety-disorder" name="diagnosedDisorders" value="Anxiety disorder" onChange={handleCheckboxChange} />
            <label htmlFor="anxiety-disorder" className="mr-2">Anxiety disorder</label>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
            <input type="checkbox" id="depression" name="diagnosedDisorders" value="Depression" onChange={handleCheckboxChange} />
            <label htmlFor="depression" className="mr-2">Depression</label>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
            <input type="checkbox" id="bipolar-disorder" name="diagnosedDisorders" value="Bipolar disorder" onChange={handleCheckboxChange} />
            <label htmlFor="bipolar-disorder" className="mr-2">Bipolar disorder</label>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
            <input type="checkbox" id="ptsd" name="diagnosedDisorders" value="PTSD" onChange={handleCheckboxChange} />
            <label htmlFor="ptsd" className="mr-2">PTSD</label>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
            <input type="checkbox" id="ocd" name="diagnosedDisorders" value="OCD" onChange={handleCheckboxChange} />
            <label htmlFor="ocd" className="mr-2">OCD</label>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
            <input type="checkbox" id="other-diagnosis" name="diagnosedDisorders" value="Other" onChange={handleCheckboxChange} />
            <label htmlFor="other-diagnosis" className="mr-2">Other (please specify):</label>
            <input className='text-gray-800 bg-yellow-100' type="text" id="other-diagnosis-text" name="otherDiagnosis" onChange={handleChange} />
          </div>
          </div>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2">
              Are there specific symptoms you are experiencing? (Select all that apply)
            </label>
            <div className="flex flex-wrap ">
              <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
                <input type="checkbox" id="anxiety" name="specificSymptoms" value="Anxiety" onChange={handleCheckboxChange} />
                <label htmlFor="anxiety" className="mr-2">Anxiety</label>
              </div>
              <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
                <input type="checkbox" id="depression-symptom" name="specificSymptoms" value="Depression" onChange={handleCheckboxChange} />
                <label htmlFor="depression-symptom" className="mr-2">Depression</label>
              </div>
              <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
                <input type="checkbox" id="panic-attacks" name="specificSymptoms" value="Panic attacks" onChange={handleCheckboxChange} />
                <label htmlFor="panic-attacks" className="mr-2">Panic attacks</label>
              </div>
              <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
                <input type="checkbox" id="trauma-related" name="specificSymptoms" value="Trauma-related symptoms" onChange={handleCheckboxChange} />
                <label htmlFor="trauma-related" className="mr-2">Trauma-related</label>
              </div>
              <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
                <input type="checkbox" id="relationship" name="specificSymptoms" value="Relationship issues" onChange={handleCheckboxChange} />
                <label htmlFor="relationship" className="mr-2">Relationship issues</label>
              </div>
              {/* Add more specific symptom checkboxes here */}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-bold mb-2">
              What goals would you like to achieve through therapy? (Select all that apply)
            </label>
            <div className="flex flex-wrap ">
              <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
                <input type="checkbox" id="reduce-anxiety" name="therapyGoals" value="Reduce anxiety" onChange={handleCheckboxChange} />
                <label htmlFor="reduce-anxiety" className="mr-2">Reduce anxiety</label>
              </div>
              <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
                <input type="checkbox" id="improve-mood" name="therapyGoals" value="Improve mood" onChange={handleCheckboxChange} />
                <label htmlFor="improve-mood" className="mr-2">Improve mood</label>
              </div>
              <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
                <input type="checkbox" id="manage-stress" name="therapyGoals" value="Manage stress" onChange={handleCheckboxChange} />
                <label htmlFor="manage-stress" className="mr-2">Manage stress</label>
              </div>
              <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
                <input type="checkbox" id="enhance-coping-skills" name="therapyGoals" value="Enhance coping skills" onChange={handleCheckboxChange} />
                <label htmlFor="enhance-coping-skills" className="mr-2">Enhance coping skills</label>
              </div>
              <div className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4 ">
                <input type="checkbox" id="enhance-relationship-skills" name="therapyGoals" value="Enhance relationship skills" onChange={handleCheckboxChange} />
                <label htmlFor="enhance-relationship-skills" className="mr-2">Enhance relationship skills</label>
              </div>
              {/* Add more therapy goal checkboxes here */}
            </div>
          </div>
          {/* Reason for Therapy */}
      <div className="mb-6">
        <label className="block  text-lg font-bold mb-2" htmlFor="reasonForTherapy">
          What brings you to therapy today? Please describe briefly.
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800 bg-yellow-100"
          id="reasonForTherapy" placeholder="Reason for Therapy" rows={4}
          name="reasonForTherapy" value={formData.reasonForTherapy} onChange={handleChange}></textarea>
      </div>

      {/* Terms and Conditions Checkbox */}
      <div className="mb-6">
            <label className="block text-lg font-bold">
              <input
                className="mr-2 leading-tight"
                type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} />
              <span className="text-lg">
                Agree to Terms and Conditions
              </span>
            </label>
            <div className=" my-4">
              <p className=' text-lg my-2'>Terms and Conditions:</p>
              <p className='text-sm'>
                By accessing and using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access or use our website.
                <br /><br />
                Therapist Licensing: Our platform connects users with licensed therapists based in India. By using our services, you acknowledge and agree that the therapists you interact with may not be licensed in the country you are residing in. You accept full responsibility for engaging with therapists licensed in India and understand that their qualifications may not meet the specific licensing requirements of your country.
                <br /><br />
                Confidentiality: Your privacy and confidentiality are of utmost importance to us. All information shared with the therapists through our platform is strictly confidential. Therapists are bound by professional ethics and legal obligations to maintain confidentiality. Your personal information and session content will not be disclosed to any third party without your explicit consent, except under the following circumstances:
                <br /><br />
                a. If there is an imminent risk of harm to yourself or others, therapists may be required to disclose information to prevent harm.
                <br />
                b. If required by law or governmental regulations, therapists may be obligated to disclose information in response to a valid legal request or subpoena.
                <br /><br />
                Use of Information: The information provided on our website is for informational and educational purposes only. It does not constitute professional advice or treatment recommendations. Users are solely responsible for the decisions they make based on the information obtained through our platform.
                <br /><br />
                User Conduct: Users agree to use our platform responsibly and respectfully. Any abusive, harassing, or inappropriate behavior towards therapists or other users will not be tolerated and may result in termination of access to our services.
                <br /><br />
                Limitation of Liability: Our platform is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the accuracy, reliability, or suitability of the information provided. We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website.
                <br /><br />
                Modification of Terms: We reserve the right to modify these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes. Your continued use of our website after the posting of changes constitutes your acceptance of such changes.
              </p>
            </div>
          </div>

      {/* Submit Button */}
      {loading ? (
                <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-200"></div>
                </div>
            ) : (
      <div className="flex items-center justify-center">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline ${!formData.agreedToTerms ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="submit"
          disabled={!formData.agreedToTerms}>
          Submit
        </button>
      </div>
            )}
    </form>
  );
};

export default TherapistForm;
