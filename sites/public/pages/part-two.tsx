import Head from "next/head"
import { PageHeader, Form, FormCard } from "@bloom-housing/ui-components"
import { useForm } from "react-hook-form"
import Layout from "../layouts/application"

export default function PartTwo() {
  const pageTitle = "Exygy Assessment - Part Two"
  const { handleSubmit } = useForm()

  const onSubmit = () => {}

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <PageHeader title={"Part Two"} />
      <section className="bg-gray-300">
        <div className="md:mb-20 md:mt-12 mx-auto max-w-lg print:my-0 print:max-w-full">
          <FormCard>
            <div className="form-card__group">
              <Form id="sign-in" onSubmit={handleSubmit(onSubmit)}>
                Your form goes here
              </Form>
            </div>
          </FormCard>
        </div>
      </section>
    </Layout>
  )
}
