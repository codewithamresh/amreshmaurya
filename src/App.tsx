import ProfileHero from './components/ProfileHero'
import { WorkExperience } from './components/WorkExperience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main>
        <ProfileHero />
        <WorkExperience />
        <Projects />
        <Skills />
        <Education />
      </main>
    </div>

  )
}
