import Image from 'next/image'
import VulenteerModal from '../VulenteerModal/VulenteerModal';
const JoinVulenteers = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Join Our Volunteer</h1>
                        <p className="py-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur nesciunt modi, obcaecati provident, non doloribus earum odit v is tenetur autem perferendis voluptates aspernatur ipsa corrupti unde placeat odio asperiores velit exercitationem sint at ex harum neque ipsum! Eos soluta nobis saepe officia mollitia dolores cupiditate, accusamus eum ab pariatur dicta eaque excepturi at vitae maxime consequuntur dolor eius vel voluptatem ipsam culpa quo?</p>
                        <label htmlFor="joinVolunterers" className="btn btn-warning mt-2" >Join Now</label >

                    </div>
                    <div className="card flex-shrink-0   ">
                        <div className="card-body">
                          
                            <Image
                                src="/vtwo.png"
                                alt="Volunteer"
                                width={500}
                                height={600}
                            />

                        </div>
                    </div>
                </div>
            </div>
             <VulenteerModal></VulenteerModal>
        </div>
    );
};

export default JoinVulenteers;