'use client';

import { Button, Card, CardFooter, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

import styles from './styles.module.css';

interface Project {
    title: string;
    description: string;
    preview: string;
    video: string;
    githubUrl: string;
    classes: string;
}

const projects: Project[] = [
    {
        title: 'Should I quit my job?',
        description: 'A tool that helps you make the right decision',
        preview: '/quit/preview.gif',
        video: '/quit/video.mp4',
        githubUrl: 'https://github.com/olivorocksrotated/should-i-quit-my-job',
        classes: 'quit-grid-area'
    },
    {
        title: 'Olivo',
        description: 'An example of a complex full-stack Next.js app for self-management',
        preview: '/olivo/preview.gif',
        video: '/olivo/video.mp4',
        githubUrl: 'https://github.com/olivorocksrotated/olivo',
        classes: 'olivo-grid-area'
    },
    {
        title: 'Movies search',
        description: 'An example Angular app that pulls information from movies through a public API',
        preview: '/movies/preview.gif',
        video: '/movies/video.mp4',
        githubUrl: 'https://github.com/lean1190/movies-search',
        classes: 'movies-grid-area'
    },
    {
        title: 'Appreciation',
        description: 'A small Next.js app to show appreciation',
        preview: '/thank-you/preview.gif',
        video: '/thank-you/video.mp4',
        githubUrl: 'https://github.com/lean1190/thank-you',
        classes: 'thank-you-grid-area'
    }
];

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const openProjectModal = (project: Project) => {
        setSelectedProject(project);
        onOpen();
    };

    return (
        <main className="flex h-full flex-col justify-between gap-20 p-8 tracking-tight">
            <h1 className="text-7xl font-bold sm:text-8xl">Portfolio.</h1>
            <section className="grid w-full grid-cols-12 grid-rows-2 gap-y-8 sm:mx-auto sm:max-h-[600px] sm:max-w-7xl sm:gap-8">
                {
                    projects.map((project) => (
                        <Card
                            key={project.title}
                            className={`col-span-12 cursor-pointer ${styles[project.classes]}`}
                        >
                            <Image
                                removeWrapper
                                alt={project.title}
                                className="z-0 size-full object-cover"
                                src={project.preview}
                                onClick={() => openProjectModal(project)}
                            />
                            <CardFooter className="absolute bottom-0 z-10 flex items-start border-t-1 border-default-100 bg-black/40 sm:items-center">
                                <div className="flex grow">
                                    <div className="flex flex-col text-left">
                                        <p className="font-bold">{project.title}</p>
                                        <p className="text-tiny text-white/60">{project.description}</p>
                                    </div>
                                </div>
                                <Link href={project.githubUrl} target="_blank">
                                    <Button className="min-w-32" radius="full" size="sm">
                                        <FaGithub size={20} /> Get the code
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))
                }
            </section>
            <footer className="flex items-center justify-between py-12">
                <h2 className="w-16">
                    <Link className="text-3xl font-light leading-8" color="foreground" href="https://leanvilas.com">Lean Vilas</Link>
                </h2>
                <h3 className="w-[120px] text-3xl font-bold leading-8">Software Engineer</h3>
                <h4 className="w-20">
                    <Link className="text-3xl font-light leading-8" color="foreground" href="https://www.linkedin.com/in/leanvilas/">2013-Today</Link>
                </h4>
            </footer>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" placement="center" size="4xl">
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {selectedProject?.title}
                            </ModalHeader>
                            <ModalBody>
                                <video controls>
                                    <source src={selectedProject?.video} type="video/mp4" />
                                </video>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </main>
    );
}
