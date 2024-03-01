import { Col, Flex, Row } from "antd";
import { projects, Project as ProjectType } from "projectsData";
import { Project } from "./project";
import { Header } from "modules/ui";

const Projects = () => (
    <Row gutter={[0, 24]} justify="center">
        <Col>
            <Header accent="My" text="Projects" />
        </Col>
        <Col span={24}>
            <Flex vertical gap={48}>
                {projects.map((project: ProjectType) =>
                    <Project key={project.id} project={project} />)
                }
            </Flex>
        </Col>
    </Row>
);
export default Projects;