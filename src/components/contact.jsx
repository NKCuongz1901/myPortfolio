

const Contact = () => {
    return (
        <div className="max-w-[1000px] mx-auto px-6 md:my-12" id="contact">
            <div className="grid md:grid-cols-2 place-items-center">
                <div className="text-gray-200 my-3">
                    <h2 className="text-4xl font-semibold mb-5">About <span>me</span></h2>
                    <p className="text-justify leading-7 mx-auto w-11/12">I am a passionate software engineer from Vietnam with a strong desire to excel in the field of software development. I continuously strive to enhance my skills and broaden my knowledge to become a highly competent engineer. I am excited about the opportunity to collaborate with talented professionals and contribute to impactful projects. I look forward to working with you and achieving great things together</p>
                </div>
                <form
                    action="https://getform.io/f/ayvvzdpb"
                    method="POST"
                    className="max-w-6xl p-5 md:p-12"
                    id="form"
                >
                    <p className="text-gray-200 font-bold text-xl mb-2">
                        Connect me
                    </p>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name ..."
                        className="mb-2 w-full rounded-md border border-purple-700 py-2 pr-4 pl-2"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email ..."
                        className="mb-2 w-full rounded-md border border-purple-700 py-2 pr-4 pl-2"
                    />
                    <textarea
                        id="textArea"
                        name="textArea"
                        cols={"30"}
                        rows={"4"}
                        placeholder="Your message ..."
                        className="mb-2 w-full rounded-md border border-purple-700 py-2 pr-4 pl-2"
                    />
                    <button type="submit"
                        className="w-full rounded-lg bg-blue-700 p-2 hover:bg-blue-500 transition duration-500"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Contact