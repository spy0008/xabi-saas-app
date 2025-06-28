import CompanionForm from "@/components/CompanionForm"
import { newCompanionPermissions } from "@/lib/actions/companion.actions"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const NewCompanion = async () => {
  const { userId } = await auth()

  if (!userId) redirect("/sign-in")

  const canCreateCompanion = await newCompanionPermissions()

  return (
    <main className=" flex items-center justify-center px-4 py-8 bg-gray-100/10">

      {
        canCreateCompanion ? (
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

        ) : (
          <article className="companion-limit">
            <Image
            src="/images/limit.svg"
            alt="companion limit reached"
            width={360}
            height={230}
            />

            <div className="cta-badge">
              Upgrade your plan
            </div>

            <h1>You've Reached Your Limit</h1>
            <p>You've Reached Your companion Limit. Upgrade to create more campanion and premium features.</p>
            <Link href="/subscription" className="btn-primary w-full justify-center">
            Upgrade My Plan
            </Link>
          </article>
        )
      }
    </main>
  )
}

export default NewCompanion