import React from 'react';
import PrimaryButton from './PrimaryButton';
import Mac from "../components/Mac";
import Phone from "../components/Phone";

interface ProjectParagraphProps {
    header: string;
    paragraph: string;
    buttonText: string;
    buttonLink: string;
    phone: boolean;
}

const ProjectParagraph: React.FC<ProjectParagraphProps> = ({
    header,
    paragraph,
    buttonText,
    buttonLink,
    phone
}) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[50%] h-[100%] flex flex-col md:flex-row items-center justify-center">
                {phone && (
                    <Phone/>
                )}
                <div className={``} style={{marginLeft: phone ? '20px' : '0' }}>
                    <h1 className={`text-white text-[40px] pb-1`}>{header}</h1>
                    <div className="overflow-hidden bg-white w-[10vh] h-[1px]"></div>
                    <p className={`text-white pt-10 text-[16px]`}>{paragraph}</p>
                    <br />
                    <PrimaryButton text={buttonText} link={buttonLink} />
                </div>
                {!phone && (
                    <Mac />
                )}
            </div>
        </div>
    );
};

export default ProjectParagraph;