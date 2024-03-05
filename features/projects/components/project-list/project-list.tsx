import { ProjectCard } from "../project-card";
import { ErrorScreen } from "../../../error/error-screen";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  const refetchProjectData = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <div className={styles.loading}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/loading-circle.svg"
          alt="loading icon"
          data-testid="loading-icon"
        ></img>
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return <ErrorScreen onClick={refetchProjectData} />;
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
