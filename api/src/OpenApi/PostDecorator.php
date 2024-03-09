<?php

namespace App\OpenApi;

use ArrayObject;
use ApiPlatform\OpenApi\Model;
use ApiPlatform\OpenApi\OpenApi;
use ApiPlatform\OpenApi\Model\PathItem;
use ApiPlatform\OpenApi\Model\Operation;
use ApiPlatform\OpenApi\Factory\OpenApiFactoryInterface;

class PostDecorator implements OpenApiFactoryInterface 
{
    public function __construct(private OpenApiFactoryInterface $decorated)
    {
    }

    public function __invoke(array $context = []): OpenApi
    {
        $openApi = ($this->decorated)($context);

        // Add the delete operation
        $deletePathItem = $openApi->getPaths()->getPath('/posts/{id}')
            ->withDelete(
                new Operation(
                    operationId: 'DeletePost',
                    summary: 'Delete a post',
                    parameters: [
                        new Model\Parameter(
                            name: 'id',
                            in: 'path',
                            required: true,
                            schema: [
                                'type' => 'integer',
                            ],
                        ),
                    ],
                    tags: ['Post'],
                    responses: [
                        '200' => [
                            'description' => 'Delete post',
                            'content' => [
                                'application/json' => [
                                    'schema' => [
                                        '$ref' => '#/components/schemas/Post',
                                    ]
                                ]
                            ]
                        ]
                    ],
                    security: [],
                )
            );
        $openApi->getPaths()->addPath('/posts/{id}', $deletePathItem);
        
        // Add the post operation
        $postPathItem = $openApi->getPaths()->getPath('/posts')
            ->withPost(
                new Operation(
                    operationId: 'PostPost',
                    summary: 'Create a post',
                    requestBody: new Model\RequestBody(
                        content: new ArrayObject([
                            'application/json' => [
                                'schema' => [
                                    '$ref' => '#/components/schemas/Post',
                                ],
                            ],
                        ]),
                    ),
                    tags: ['Post'],
                    responses: [
                        '200' => [
                            'description' => 'Create post',
                            'content' => [
                                'application/json' => [
                                    'schema' => [
                                        '$ref' => '#/components/schemas/Post',
                                    ]
                                ],
                            ],
                        ],
                    ],
                    security: [],
                )
            );
        $openApi->getPaths()->addPath('/posts', $postPathItem);

        // Add the patch operation
        $postPathItem = $openApi->getPaths()->getPath('/posts/{id}')
            ->withPatch(
                new Operation(
                    operationId: 'PatchPost',
                    summary: 'Modify a post',
                    requestBody: new Model\RequestBody(
                        content: new ArrayObject([
                            'application/json' => [
                                'schema' => [
                                    '$ref' => '#/components/schemas/Post',
                                ],
                            ],
                        ]),
                    ),
                    tags: ['Post'],
                    responses: [
                        '200' => [
                            'description' => 'Modify a post',
                            'content' => [
                                'application/json' => [
                                    'schema' => [
                                        '$ref' => '#/components/schemas/Post',
                                    ]
                                ],
                            ],
                        ],
                    ],
                    security: [],
                )
            );
        $openApi->getPaths()->addPath('/posts/{id}', $postPathItem);

        return $openApi;

    }
} 