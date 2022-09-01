import React, { useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Container from "../../components/container"
import { useEffect } from "react"

const Offer = () => {
  const [isAgreementChecked, setIsAgreementChecked] = useState(false)

  const handleCheckbox = e => {
    setIsAgreementChecked(!isAgreementChecked)
  }

  useEffect(() => {
    console.log(isAgreementChecked)
  }, [isAgreementChecked])

  return (
    <Layout>
      <SEO title="Offer" />
      <Container>
        <h1 className="soehneBold lg:text-5xl">Offer</h1>

        <label for="my-modal" class="btn modal-button">
          open modal
        </label>

        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div
                className="flex items-center space-x-2 mt-5 cursor-pointer inline-block"
                onClick={handleCheckbox}
              >
                <input
                  type="checkbox"
                  checked={isAgreementChecked}
                  class="checkbox checkbox-xs"
                />
                <p className="text-xs">Akceptuję regulamin</p>
              </div>
            </form>
            <div class="modal-action">
              <label for="my-modal" class="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Offer
