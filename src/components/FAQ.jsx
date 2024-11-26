import questionIcon from "../assets/Icons/messages-question.svg";
import { useRef } from "react";
import "../CustomStyles/OtherStyles.css";
export default function FAQ() {
	return (
		<>
			<div className="flex flex-col justify-center items-center pt-20">
				<h3 className="text-2xl font-semibold mb-6">
					Frequently Asked <span className="text-amber-400">Questions</span>
				</h3>
				<p className="mb-20 ml-5 mr-5">
					We’ve put together answers to some of your most frequently asked
					questions about our platform. If you don’t find what you’re looking
					for, feel free to reach out to us—we’re here to help!
				</p>
			</div>
			<div className="flex flex-col justify-center items-center">
				{FAQuestions.map((question, idx) => (
					<QuesionComponent
						key={idx}
						quest={question.question}
						ans={question.answer}
					/>
				))}
			</div>
		</>
	);
}

function QuesionComponent(props) {
	const FaqConatiner = useRef(null);
	const ActiveQuestionHead = useRef(null);
	const ActiveQuestionBody = useRef(null);

	const handleActive = () => {
		if (
			ActiveQuestionHead.current.classList.contains(
				"FAQuestion_question_active"
			)
		) {
			ActiveQuestionHead.current.classList.remove("FAQuestion_question_active");
			ActiveQuestionBody.current.classList.remove("FAQuestion_answer_active");
		} else {
			const parentContainer = FaqConatiner.current.parentElement;
			console.log(parentContainer);
			const ParentArray = [...parentContainer.children];

			ParentArray.forEach((child) => {
				child.children[0].classList.remove("FAQuestion_question_active");
				child.children[1].classList.remove("FAQuestion_answer_active");
			});
			ActiveQuestionHead.current.classList.add("FAQuestion_question_active");
			ActiveQuestionBody.current.classList.add("FAQuestion_answer_active");
		}
	};
	return (
		<div
			ref={FaqConatiner}
			className="bg-gray-700 border-amber-400 border-2 mb-3 w-11/12 rounded overflow-hidden"
			onClick={handleActive}
		>
			<div
				ref={ActiveQuestionHead}
				className="FAQuestion_question"
			>
				<img
					src={questionIcon}
					alt="question icon"
					width="24px"
				/>

				{props.quest}
			</div>
			<div
				ref={ActiveQuestionBody}
				className=" FAQuestion_answer"
			>
				<span>{props.ans}</span>
			</div>
		</div>
	);
}

const FAQuestions = [
	{
		question: "When can I deposit or withdraw from my investment account?",
		answer:
			"You can make deposits and withdrawals anytime you want! Just make sure that your funds aren't tied up in any ongoing trades before you withdraw. You can easily see your available balance right on the main page of your account dashboard on the Investing platform.",
	},
	{
		question: "How can I see my account balance?",
		answer:
			"You can view this information anytime on your account dashboard. It's easily accessible, so you can check it whenever you need to!",
	},
	{
		question: "I forgot my password, how can I reset it?",
		answer:
			"To reset your password, please visit the password reset page. Once there, enter your email address in the designated field and click the Reset button. This will initiate the process, and you should receive an email with further instructions shortly. Make sure to check your inbox, including your spam or junk folder, just in case the email gets redirected there!",
	},
	{
		question: "How will I know if my withdrawal was successful?",
		answer:
			"You’ll receive an automatic notification as soon as we send the funds, and you can easily check your transactions or account balance anytime! Just keep in mind that the time it takes for the funds to reach you depends on your chosen payment system.",
	},
	{
		question: "What's the maximum amount I can withdraw?",
		answer:
			"You can withdraw your entire account balance, except for the funds currently being used to support your open positions.",
	},
	{
		question: "What are the fees for making a withdrawal?",
		answer:
			"Withdrawal fees can vary depending on the method you choose. You can check the fee schedule in your account settings or contact our support team for detailed information.",
	},
	{
		question: "Can I change my withdrawal method?",
		answer:
			"Yes, you can change your withdrawal method in your account settings. Just select your preferred method and follow the prompts to update it.",
	},
	{
		question: "How long until my investments are credited to my account?",
		answer:
			"Typically, withdrawals take between 1 to 3 business days to process,depending on your bank. You'll receive a notification once the funds are on their way!",
	},
];
