<?php

namespace App\OpenApi;

use ArrayObject;
use ApiPlatform\OpenApi\Model;
use ApiPlatform\OpenApi\OpenApi;
use ApiPlatform\OpenApi\Model\PathItem;
use ApiPlatform\OpenApi\Model\Operation;
use ApiPlatform\OpenApi\Factory\OpenApiFactoryInterface;

class UserDecorator implements OpenApiFactoryInterface 
{
    public function __construct(private OpenApiFactoryInterface $decorated)
    {
    }

    public function __invoke(array $context = []): OpenApi
    {
        $openApi = ($this->decorated)($context);

        // Add the delete operation
        $deletePathItem = $openApi->getPaths()->getPath('/users/{id}')
            ->withDelete(
                new Operation(
                    operationId: 'DeleteUser',
                    summary: 'Delete user',
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
                    tags: ['User'],
                    responses: [
                        '200' => [
                            'description' => 'Delete user',
                            'content' => [
                                'application/json' => [
                                    'schema' => [
                                        '$ref' => '#/components/schemas/User',
                                    ]
                                ]
                            ]
                        ]
                    ],
                    security: [],
                )
            );
        $openApi->getPaths()->addPath('/users/{id}', $deletePathItem);
        
        // Add the post operation
        $postPathItem = (new Model\PathItem())
            ->withPost(
                new Operation(
                    operationId: 'PostUser',
                    summary: 'Create user',
                    requestBody: new Model\RequestBody(
                        content: new ArrayObject([
                            'application/json' => [
                                'schema' => [
                                    '$ref' => '#/components/schemas/User',
                                ],
                            ],
                        ]),
                    ),
                    tags: ['User'],
                    responses: [
                        '200' => [
                            'description' => 'Create user',
                            'content' => [
                                'application/json' => [
                                    'schema' => [
                                        '$ref' => '#/components/schemas/User',
                                    ]
                                ],
                            ],
                        ],
                    ],
                    security: [],
                )
            );
        $openApi->getPaths()->addPath('/users/register', $postPathItem);

        // Add the patch operation
        $patchPathItem = $openApi->getPaths()->getPath('/users/{id}')
            ->withPatch(
                new Operation(
                    operationId: 'PatchUser',
                    summary: 'Modify a user',
                    requestBody: new Model\RequestBody(
                        content: new ArrayObject([
                            'application/json' => [
                                'schema' => [
                                    '$ref' => '#/components/schemas/User',
                                ],
                            ],
                        ]),
                    ),
                    tags: ['User'],
                    responses: [
                        '200' => [
                            'description' => 'Modify a user',
                            'content' => [
                                'application/json' => [
                                    'schema' => [
                                        '$ref' => '#/components/schemas/User',
                                    ]
                                ],
                            ],
                        ],
                    ],
                    security: [],
                )
            );
        $openApi->getPaths()->addPath('/users/{id}', $patchPathItem);

        return $openApi;

    }
} 