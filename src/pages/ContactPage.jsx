import { useState } from 'react';
import styles from './ContactPage.module.css';
import btnStyles from '../components/Button.module.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.';
    }
    if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (formData.body.trim().length < 3) {
      newErrors.body = 'Message must be at least 3 characters.';
    }
    return newErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('✅ Form Submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({
        fullName: '',
        subject: '',
        email: '',
        body: '',
      });
    }
  }

  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>Full Name:</label>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}

        <label>Subject:</label>
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <p className={styles.error}>{errors.subject}</p>}

        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <label>Message:</label>
        <textarea name="body" value={formData.body} onChange={handleChange} />
        {errors.body && <p className={styles.error}>{errors.body}</p>}
        <button className={btnStyles.greenButton}>Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
