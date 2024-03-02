import { Carousel, Col, Row, Image, Typography, Flex, Button, theme, Card } from "antd";
import { Project as ProjectType } from "projectsData";

const { Title, Text } = Typography;

interface Props {
    project: ProjectType;
}

export const Project = ({ project }: Props) => {

    const { token: { colorPrimary } } = theme.useToken();

    return (
        <Row key={project.id} gutter={[24, 16]} align="middle">
            <Col xs={24} sm={24} md={24} lg={12}>
                <Carousel autoplay>
                    {project.imgs.map((image, index) =>
                        <div>
                            <Image key={index} src={image} />
                        </div>
                    )}
                </Carousel>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
                <Card
                    bordered={false}
                    style={{ height: "100%" }}
                    styles={{ body: { height: "100%" } }}
                >
                    <Flex vertical gap={4} style={{ height: "100%", minHeight: "1px" }}>
                        <Title level={3} style={{ color: colorPrimary }}>{project.title}</Title>
                        <Title level={5}>{project.technologies.join(", ")}</Title>
                        {project.client && <Flex>Client Work icon</Flex>}
                        <Text strong color="secondary">{project.description}</Text>
                        {project.testData &&
                            <>
                                <Title level={5}>Test app with:</Title>
                                <Flex gap={32}>
                                    {project.testData.map((data) => (
                                        <Flex vertical>
                                            <Text color="secondary">{data.userName}</Text>
                                            <Text color="secondary">{data.password}</Text>
                                        </Flex>
                                    ))}
                                </Flex>
                            </>
                        }
                        <div style={{ minHeight: 56 }}></div>
                        <div style={{ position: "absolute", bottom: 24, width: "100%" }}>
                            <Flex justify="center" gap={16}>
                                <Button href={project.site} target="_blank" type="primary">{project.client ? "Live Site" : "Demo Site"}</Button>
                                {project.source && <Button href={project.source} target="_blank" type="primary">Source Code</Button>}
                                {project.mockup && <Button href={project.mockup} type="primary">Mock Up</Button>}
                            </Flex>
                        </div>
                    </Flex>
                </Card>
            </Col>
        </Row>
    );
};
