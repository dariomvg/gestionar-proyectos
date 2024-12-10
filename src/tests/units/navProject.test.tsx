import { NavProjects } from "@/components/NavProjects";
import { useHandleProjects } from "@/contexts/ContextProjects";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

jest.mock("@/contexts/ContextProjects", () => ({
  useHandleProjects: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Renderizar proyectos en navProject", () => {
  it("se muestran los proyectos en nav", () => {
    (useHandleProjects as jest.Mock).mockReturnValue({
      projects: [
        { id: 0, title: "create react app", description: "" },
        { id: 1, title: "create next app", description: "" },
      ],
    });
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    render(<NavProjects />);

    expect(screen.getByText("create react app")).toBeInTheDocument(); 
    expect(screen.getByText("create next app")).toBeInTheDocument(); 

  });
});
