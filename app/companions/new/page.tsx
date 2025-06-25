import CompanionForm from "@/components/CompanionForm"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const NewCompanion = async () => {
  const { userId } = await auth()

  if(!userId) redirect("/sign-in")

  return (
    <main className=" flex items-center justify-center px-4 py-8 bg-gray-100/10">
      <article className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <h1 className="text-3xl font-bold mb-4">Build Your Companion</h1>
        <p className="text-muted-foreground text-sm">
          Fill out the form to create your personalized learning companion. Choose a style, voice, and topic.
        </p>

        {/* Left*/}
        <div className="hidden sm:flex items-center justify-center">
          <img
            src="/images/illustion-companion.svg"
            alt="Illustration of companion builder"
            className="w-full max-w-sm"
          />
        </div>

        {/* Right */}
        <div className="w-full">

          <CompanionForm />
        </div>
      </article>
    </main>
  )
}

export default NewCompanion