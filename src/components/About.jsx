import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="About Me"
        title="Engineering Intelligence Into Real Products"
        subtitle="I bridge data, algorithms, and software architecture to build reliable systems that produce measurable impact."
      />

      <motion.div
        className="mx-auto max-w-4xl rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-glass backdrop-blur-md sm:p-10 dark:border-slate-800 dark:bg-slate-900/60"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
         I am an AI Master’s student driven by curiosity and a passion for building systems that solve real problems. I enjoy exploring the vast landscape of Artificial Intelligence—from Deep Learning and Natural Language Processing to Computer Vision and Embedded Systems.

         My goal is to transform complex data challenges into practical, scalable solutions while constantly learning new technologies. Whether I’m fine-tuning a model, architecting a data pipeline, or experimenting with hardware, I am dedicated to creating clean, impactful products that make a difference.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
