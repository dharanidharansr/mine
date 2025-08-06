'use client';
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3dcard";
import Image from "next/image";
import { LinkPreviewDemo } from "@/components/linkpreview";
import { motion } from "framer-motion";
// import MLB from '@/public/assests/machine_learningblog.png'
export default function Blogs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-white "></h1>
          <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
          <CardContainer className="inter-var">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={() => window.open('https://dev.to/dharanidharan_sr/ai-tools-that-will-change-your-workflow-in-2025-21kh', '_blank')}
            >
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  AI Tools That Will Change Your Workflow in 2025
                </CardItem>
            
                  
                <CardItem
                  translateZ="100"
                  rotateX={0}
                  rotateZ={-3}
                  className="w-full mt-4"
                >
                  <Image
                    src="/assests/AI-Tools-Blog-Post-scaled.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Next.js guide thumbnail"
                  />
                </CardItem>
                <div className=" mt-20 text-center">
                  <CardItem
                    translateZ={20}
                    className="cursor-pointer px-6 py-2 rounded-xl text-sm font-medium dark:text-white bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  >
                    Read More →
                  </CardItem>
                </div>
              </CardBody>
              </motion.div>
            </CardContainer>
            {/* Blog Post 1 */}
            <CardContainer className="inter-var ">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={() => window.open('https://dev.to/dharanidharan_sr/how-machine-learning-is-transforming-the-world-51on', '_blank')}
            >
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  How Machine Learning is Transforming the World? 
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={0}
                  rotateZ={-3}
                  className="w-full mt-4"
                >
                  <Image
                    src="/assests/mll.webp"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Next.js guide thumbnail"
                  />
                </CardItem>
                <div className=" mt-20 text-center">
                  <CardItem

                    translateZ={20}
                    className="cursor-pointer px-6 py-2 rounded-xl text-sm font-medium dark:text-white bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  >
                    Read More →
                  </CardItem>
                </div>
              </CardBody>
              </motion.div>
            </CardContainer>
            </div>
        </div>
      </div>
    </section>
  );
}
