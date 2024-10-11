<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = Project::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")){
            $query->where("name","like","%". request("name"). "%");
        }

        if (request("status")) {
            $query->where("status", request("status"));
        }
        $projects = $query->orderBy($sortField, $sortDirection)
        ->paginate(10)->onEachSide(1);        
        return inertia("Project/Index", [
            "projects" => ProjectResource::collection($projects),
            "queryParams" => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProjectRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProjectRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        $query = $project->tasks();
        
        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")){
            $query->where("name","like","%". request("name"). "%");
        }

        if (request("status")) {
            $query->where("status", request("status"));

        }
        
        $tasks = $query->orderBy($sortField, $sortDirection)
        ->pagination(10)->onEachSide(1);
        return inertia('Project/Show', [
            'project' => new ProjectResource($project),
            "tasks" => TaskResource::collection($task),
            "queryParams" => request()->query() ?: null,
        ]);
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    
    
     public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProjectRequest  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }
}
