import type {ReactNode} from 'react';
import Layout from '@theme/Layout';

import styles from './contact-us.module.css';

export default function ContactPage(): ReactNode {
  return (
    <Layout title="Contact Us" description="Contact North Arrow Research.">
      <main className={styles.page}>
        <div className="container">
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.details}>
            info@northarrowresearch.com
          </p>
          <div className={styles.layout}>
            <section className={styles.card}>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <label>
                    <span className={styles.fieldLabel}>First Name (required)</span>
                    <input className={styles.input} name="firstName" required />
                  </label>
                  <label>
                    <span className={styles.fieldLabel}>Last Name (required)</span>
                    <input className={styles.input} name="lastName" required />
                  </label>
                </div>
                <label>
                  <span className={styles.fieldLabel}>Email (required)</span>
                  <input className={styles.input} type="email" name="email" required />
                </label>
                <label>
                  <span className={styles.fieldLabel}>Message (required)</span>
                  <textarea className={styles.textarea} name="message" required />
                </label>
                <button type="submit" className={styles.button}>
                  Send
                </button>
              </form>
            </section>

            <aside className={styles.card}>
              <h2>North Arrow Research</h2>
              <p>info@northarrowresearch.com</p>
              <nav className={styles.links}>
                <a href="/people">People</a>
                <a href="/contact-us">Contact Us</a>
              </nav>
            </aside>
          </div>
        </div>
      </main>
    </Layout>
  );
}
